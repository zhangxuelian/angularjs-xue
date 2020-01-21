angular.module('xue.util.function', ['xue.util.lang'])
    .service('xueUtilFunc', ["xueUtilLang", function (xueUtilLang) {
        var self = this;
        var FUNC_ERROR_TEXT = 'Expected a function';
        var nativeMax = Math.max,
            nativeMin = Math.min;
        /**
         * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，
         * 调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
         *
         * @param {number} n 超过多少次不再调用func（限制调用func 的次数）
         * @param {Function} func 限制执行的函数.
         * @returns {Function} 返回新的限定函数.
         */
        this.before = function (n, func) {
            var result;
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = parseInt(n, 0);
            return function () {
                if (--n > 0) {
                    result = func.apply(this, arguments);
                }
                if (n <= 1) {
                    func = undefined;
                }
                return result;
            };
        };
        /**
         * before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func
         * 
         * @param {number} n 方法应该在调用多少次后才执行.
         * @param {Function} func 用来限定的函数.
         * @returns {Function} 返回新的限定函数.
         */
        this.after = function (n, func) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = parseInt(n, 0);
            return function () {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        };
        /**
         * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。
         *  debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。
         *  可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 
         * 决定延迟前后如何触发（是 先调用后等待 还是 先等待后调用）。 
         * func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 
         * 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果
         *
         * 注意: 如果 leading 和 trailing 选项为 true, 则 func 允许 trailing 方式调用的条件为: 
         * 在 wait 期间多次调用防抖方法。如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，
         * 类似setTimeout为0的超时。
         *
         * @param {Function} func 要防抖动的函数.
         * @param {number} [wait=0] 需要延迟的毫秒数.
         * @param {Object} [options={}] 选项对象.
         * @param {boolean} [options.leading=false] 指定在延迟开始前调用
         * @param {number} [options.maxWait] 设置 func 允许被延迟的最大值
         * @param {boolean} [options.trailing=true] 指定在延迟结束后调用
         * @returns {Function} 返回新的 debounced（防抖动）函数.
         */
        /*eslint complexity: ["error", 7]*/
        this.debounce = function (func, wait, options) {
            var lastArgs,
                lastThis,
                maxWait,
                result,
                timerId,
                lastCallTime,
                lastInvokeTime = 0,
                leading = false,
                maxing = false,
                trailing = true;

            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = Number(wait) || 0;
            if (xueUtilLang.isObject(options)) {
                leading = !!options.leading;
                maxing = 'maxWait' in options;
                maxWait = maxing ? nativeMax(Number(options.maxWait) || 0, wait) : maxWait;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }

            function invokeFunc(time) {
                var args = lastArgs,
                    thisArg = lastThis;

                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }

            function leadingEdge(time) {
                // Reset any `maxWait` timer.
                lastInvokeTime = time;
                // Start the timer for the trailing edge.
                timerId = setTimeout(timerExpired, wait);
                // Invoke the leading edge.
                return leading ? invokeFunc(time) : result;
            }

            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime,
                    timeWaiting = wait - timeSinceLastCall;

                return maxing ?
                    nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) :
                    timeWaiting;
            }

            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime;

                // Either this is the first call, activity has stopped and we're at the
                // trailing edge, the system time has gone backwards and we're treating
                // it as the trailing edge, or we've hit the `maxWait` limit.
                return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
                    (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
            }

            function timerExpired() {
                var time = Date.now();
                if (shouldInvoke(time)) {
                    return trailingEdge(time);
                }
                // Restart the timer.
                timerId = setTimeout(timerExpired, remainingWait(time));
            }

            function trailingEdge(time) {
                timerId = undefined;

                // Only invoke if we have `lastArgs` which means `func` has been
                // debounced at least once.
                if (trailing && lastArgs) {
                    return invokeFunc(time);
                }
                lastArgs = lastThis = undefined;
                return result;
            }

            function cancel() {
                if (timerId !== undefined) {
                    clearTimeout(timerId);
                }
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
            }

            function flush() {
                return timerId === undefined ? result : trailingEdge(Date.now());
            }

            function debounced() {
                var time = Date.now(),
                    isInvoking = shouldInvoke(time);

                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;

                if (isInvoking) {
                    if (timerId === undefined) {
                        return leadingEdge(lastCallTime);
                    }
                    if (maxing) {
                        // Handle invocations in a tight loop.
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (timerId === undefined) {
                    timerId = setTimeout(timerExpired, wait);
                }
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        };

        /**
         * “delay”和“defer”的基本实现，接受“args”
         *
         * @private
         * @param {Function} func 延迟加载的函数.
         * @param {number} wait 延迟秒数.
         * @param {Array} args 提供给func的参数.
         * @returns {number|Object} 返回计时器id或timeout对象 
         */
        this._baseDelay = function (func, wait, args) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function () {
                func.apply(undefined, args);
            }, wait);
        };
        /**
         * 推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加
         * 
         * @param {Function} func 要延迟的函数.
         * @param {...*} [args] 会在调用时传给 func 的参数.
         * @returns {number} 返回计时器 id.
         */
        this.defer = function (func, args) {
            return self._baseDelay(func, 1, args);
        };
        /**
         * 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func
         *
         * @param {Function} func 要延迟的函数.
         * @param {number} wait 要延迟的毫秒数.
         * @param {...*} [args] 会在调用时传入到func的参数.
         * @returns {number} 返回计时器id.
         */
        this.delay = function (func, wait, args) {
            return self._baseDelay(func, Number(wait) || 0, args);
        };
        /**
         * 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 
         * func 调用时， this 绑定到创建的函数，并传入对应参数。
         *
         * @param {Function} func 指定的触发的函数.
         * @returns {Function} 返回新的受限函数.
         */
        this.once = function (func) {
            return self.before(2, func);
        };
        /**
         * 创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply
         *
         * @param {Function} func 要应用传播参数的函数.
         * @param {number} [start=0] spread 参数的开始位置.
         * @returns {Function} 返回新的函数.
         */
        this.spread = function (func, start) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = !start ? 0 : nativeMax(parseInt(start, 0), 0);
            return function () {
                var args = Array.prototype.slice.call(arguments);
                var array = args[start],
                    otherArgs = args.slice(0, start);

                if (array) {
                    otherArgs = otherArgs.concat(array);
                }
                return func.apply(this, otherArgs);
            };
        };
        /**
         * 创建一个调用func的函数，thisArg绑定func函数中的 this (this的上下文为thisArg) ，
         * 并且func函数会接收partials附加参数。
         * 
         * @param {Function} func 绑定的函数.
         * @param {*} thisArg 绑定的this对象.
         * @param {...*} [partials] 附加的部分参数.
         * @returns {Function} 返回新的绑定函数.
         */
        this.bind = function (fnc, thisArg) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var outerArgs = Array.prototype.slice.call(arguments, 2);
            //此处的arguments为调用此函数时传进来的参数；2代表只需要保存第二个参数之后的其他的参数
            return function () { //返回值应该是一个函数
                var innerArgs = Array.prototype.slice.call(arguments);
                //此处的arguments为内部函数的参数
                var finalArgs = outerArgs.concat(innerArgs);
                return fnc.apply(thisArg, finalArgs); //使用apply方法来改变this的指向
            }
        }
}]);