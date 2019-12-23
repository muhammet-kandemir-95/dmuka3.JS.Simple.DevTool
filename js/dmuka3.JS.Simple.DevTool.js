(function () {
	// #region Dev Tool
	// #region Dev Tool DOM
	var devToolHTML = '';
	devToolHTML += '<div class="dmuka3-dev-tool" style="position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:99999999999999;background-color:rgba(0,0,0,0.8);font-family:arial;display:none;display:block;">';
	devToolHTML += '	<div class="dmuka3-dev-tool-header" style="width:100%;height:5vh;box-sizing:border-box;border-bottom:1px solid #fff;">';
	devToolHTML += '		<div class="dmuka3-dev-tool-header-title" style="overflow:hidden;width:calc(100% - 25vh);height:100%;box-sizing:border-box;float:left;padding-left:2vw;line-height:5vh;font-size:2.3vh;color:#fff;">';
	devToolHTML += '			dmuka3.JS.Simple.DevTool';
	devToolHTML += '		</div>';
	devToolHTML += '		<div class="dmuka3-dev-tool-header-state" style="user-select:none;text-align:center;width:15vh;height:100%;box-sizing:border-box;float:left;line-height:5vh;font-size:2vh;cursor:pointer;">';
	devToolHTML += '			Passive';
	devToolHTML += '		</div>';
	devToolHTML += '		<div class="dmuka3-dev-tool-header-close" style="text-align:center;width:10vh;height:100%;float:left;line-height:5vh;font-size:3vh;color:#fff;cursor:pointer;">';
	devToolHTML += '			&times;';
	devToolHTML += '		</div>';
	devToolHTML += '	</div>';
	devToolHTML += '	<div class="dmuka3-dev-tool-javascript" style="width:100%;height:15vh;box-sizing:border-box;border-bottom:1px solid #000;">';
	devToolHTML += '		<textarea class="dmuka3-dev-tool-javascript-input" style="width:100%;height:calc(100% - 4vh);font-size:2vh;resize:none;">// JavaScript Code</textarea>';
	devToolHTML += '		<div class="dmuka3-dev-tool-javascript-run" style="cursor:pointer;box-sizing:border-box;float:left;text-align:center;line-height:4vh;margin:0px;padding:0px;height:4vh;font-size:2vh;border-right:1px solid #000;background-color:#ccc;width:10vh;">';
	devToolHTML += '			Run'
	devToolHTML += '		</div>';
	devToolHTML += '		<div class="dmuka3-dev-tool-javascript-clear" style="cursor:pointer;box-sizing:border-box;float:left;text-align:center;line-height:4vh;margin:0px;padding:0px;height:4vh;font-size:2vh;border-right:1px solid #000;background-color:#ccc;width:10vh;">';
	devToolHTML += '			Clear'
	devToolHTML += '		</div>';
	devToolHTML += '		<div class="dmuka3-dev-tool-javascript-shortcuts-label" style="box-sizing:border-box;float:left;text-align:center;line-height:4vh;height:4vh;display:inline-block;font-size:2vh;border:0px;background-color:#ddd;width:14vh;text-align:center;">';
	devToolHTML += '			Shortcuts : '
	devToolHTML += '		</div>';
	devToolHTML += '		<select class="dmuka3-dev-tool-javascript-shortcuts" style="width:calc(100% - 34vh);height:4vh;display:inline-block;font-size:2vh;border:0px;">';
	devToolHTML += '		</select>';
	devToolHTML += '	</div>';
	devToolHTML += '	<div class="dmuka3-dev-tool-tabs" style="width:100%;height:80vh;background-color:#d5ded5;">';
	devToolHTML += '		<div class="dmuka3-dev-tool-tabs-items" style="width:100%;height:5vh;text-align:center;padding-top:1vh;padding-bottom:1vh;">';
	devToolHTML += '			<div class="dmuka3-dev-tool-tabs-item" data-tab="log" style="display:inline-block;cursor:pointer;opacity:1;width:20%;text-align:center;line-height:5vh;font-size:2vh;background-color:#70ce70;border-left:1px solid #0e3c0e;border-top:1px solid #0e3c0e;border-bottom:1px solid #0e3c0e;border-right:1px solid #0e3c0e;">';
	devToolHTML += '				Logs';
	devToolHTML += '			</div>';
	devToolHTML += '			<div class="dmuka3-dev-tool-tabs-item" data-tab="network" style="display:inline-block;cursor:pointer;opacity:0.5;width:20%;text-align:center;line-height:5vh;font-size:2vh;background-color:#70ce70;border-left:1px solid #0e3c0e;border-top:1px solid #0e3c0e;border-bottom:1px solid #0e3c0e;border-right:1px solid #0e3c0e;">';
	devToolHTML += '				Network';
	devToolHTML += '			</div>';
	devToolHTML += '		</div>';
	devToolHTML += '		<div class="dmuka3-dev-tool-tabs-contents" style="width:100%;height:calc(100% - 7vh);background-color:#fff;box-sizing:border-box;border-top:1px solid #000;">';
	devToolHTML += '			<div class="dmuka3-dev-tool-tabs-content-clear" style="float:left;cursor:pointer;box-sizing:border-box;text-align:center;line-height:4vh;margin:0px;padding:0px;height:4vh;font-size:2vh;border-right:1px solid #000;background-color:#ccc;width:10vh;">';
	devToolHTML += '				Clear'
	devToolHTML += '			</div>';
	devToolHTML += '			<div class="dmuka3-dev-tool-tabs-content" data-tab="log" style="box-sizing:border-box;border-top: 1px solid #000;width:100%;height:calc(100% - 4vh);overflow:auto;-webkit-overflow-scrolling: touch;">';
	devToolHTML += '			</div>';
	devToolHTML += '			<div class="dmuka3-dev-tool-tabs-content" data-tab="network" style="box-sizing:border-box;border-top: 1px solid #000;width:100%;height:calc(100% - 4vh);overflow:auto;-webkit-overflow-scrolling: touch;display:none;position:relative;">';
	devToolHTML += '				<div class="dmuka3-dev-tool-tabs-content-detail" style="display:none;position:fixed;left:0px;top:0px;width:100%;height:100%;background-color:#f0f8ff;box-sizing:border-box;padding-left:2vh;padding-right:2vh;overflow:auto;-webkit-overflow-scrolling: touch;">';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-close" style="position:absolute;right:0px;top:0px;text-align:center;width:5vh;height:auto;line-height:5vh;font-size:3vh;color:#000;cursor:pointer;">';
	devToolHTML += '						&times;';
	devToolHTML += '					</div>';
	devToolHTML += '					<h1 style="font-size:3vh;border-bottom:1px solid #ccc;">';
	devToolHTML += '						Timing';
	devToolHTML += '					</h1>';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-start-dt" style="font-size:2vh;margin-bottom:1vh;">';
	devToolHTML += '						<b>Start :&nbsp;</b>';
	devToolHTML += '						<div style="display:inline-block;margin:0px;padding:0px;"></div>';
	devToolHTML += '					</div>';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-end-dt" style="font-size:2vh;margin-bottom:1vh;">';
	devToolHTML += '						<b>End :&nbsp;</b>';
	devToolHTML += '						<div style="display:inline-block;margin:0px;padding:0px;"></div>';
	devToolHTML += '					</div>';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-diff-ms" style="font-size:2vh;margin-bottom:1vh;">';
	devToolHTML += '						<b>Diff :&nbsp;</b>';
	devToolHTML += '						<div style="display:inline-block;margin:0px;padding:0px;"></div>';
	devToolHTML += '					</div>';
	devToolHTML += '					<h1 style="font-size:3vh;border-bottom:1px solid #ccc;">';
	devToolHTML += '						Headers';
	devToolHTML += '					</h1>';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-url" style="font-size:2vh;margin-bottom:1vh;">';
	devToolHTML += '						<b>Request URL :&nbsp;</b>';
	devToolHTML += '						<div style="display:inline-block;margin:0px;padding:0px;"></div>';
	devToolHTML += '					</div>';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-method" style="font-size:2vh;margin-bottom:1vh;">';
	devToolHTML += '						<b>Request Method :&nbsp;</b>';
	devToolHTML += '						<div style="display:inline-block;margin:0px;padding:0px;"></div>';
	devToolHTML += '					</div>';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-status-code" style="font-size:2vh;margin-bottom:1vh;">';
	devToolHTML += '						<b>Status Code :&nbsp;</b>';
	devToolHTML += '						<div style="display:inline-block;margin:0px;padding:0px;"></div>';
	devToolHTML += '					</div>';
	devToolHTML += '					<div class="dmuka3-dev-tool-tabs-content-detail-other-headers" style="font-size:2vh;margin-bottom:1vh;">';
	devToolHTML += '						<b>Other Headers :&nbsp;</b>';
	devToolHTML += '						<pre style="max-width:100%;overflow:auto;margin:0px;padding:0px;margin-top:1vh;"></pre>';
	devToolHTML += '					</div>';
	devToolHTML += '					<h1 style="font-size:3vh;border-bottom:1px solid #ccc;">';
	devToolHTML += '						Body';
	devToolHTML += '					</h1>';
	devToolHTML += '					<pre class="dmuka3-dev-tool-tabs-content-detail-body" style="font-size:2vh;margin-bottom:1vh;font-style:italic;width:100%;overflow:auto;-webkit-overflow-scrolling: touch;">';
	devToolHTML += '					</pre>';
	devToolHTML += '					<h1 style="font-size:3vh;border-bottom:1px solid #ccc;">';
	devToolHTML += '						Response';
	devToolHTML += '					</h1>';
	devToolHTML += '					<pre class="dmuka3-dev-tool-tabs-content-detail-response" style="font-size:2vh;margin-bottom:1vh;font-style:italic;width:100%;overflow:auto;-webkit-overflow-scrolling: touch;">';
	devToolHTML += '					</pre>';
	devToolHTML += '				</div>';
	devToolHTML += '			</div>';
	devToolHTML += '		</div>';
	devToolHTML += '	</div>';
	devToolHTML += '</div>';

	var virtualDOM = document.createElement('div');
	virtualDOM.innerHTML = devToolHTML;

	var devToolParentDOM = virtualDOM.childNodes[0];
	document.body.appendChild(devToolParentDOM);

	var devToolHeaderState = devToolParentDOM.querySelector('.dmuka3-dev-tool-header-state');
	var devToolHeaderClose = devToolParentDOM.querySelector('.dmuka3-dev-tool-header-close');

	var devToolJavascriptInput = devToolParentDOM.querySelector('.dmuka3-dev-tool-javascript-input');
	var devToolJavascriptRun = devToolParentDOM.querySelector('.dmuka3-dev-tool-javascript-run');
	var devToolJavascriptClear = devToolParentDOM.querySelector('.dmuka3-dev-tool-javascript-clear');
	var devToolJavascriptShortcuts = devToolParentDOM.querySelector('.dmuka3-dev-tool-javascript-shortcuts');

	var devToolTabsClearDOM = devToolParentDOM.querySelector('.dmuka3-dev-tool-tabs-content-clear');
	var devToolTabsLogMenu = devToolParentDOM.querySelector('.dmuka3-dev-tool-tabs-item[data-tab="log"]');
	var devToolTabsLogContent = devToolParentDOM.querySelector('.dmuka3-dev-tool-tabs-content[data-tab="log"]');

	var devToolTabsNetworkMenu = devToolParentDOM.querySelector('.dmuka3-dev-tool-tabs-item[data-tab="network"]');
	var devToolTabsNetworkContent = devToolParentDOM.querySelector('.dmuka3-dev-tool-tabs-content[data-tab="network"]');
	var devToolTabsNetworkContentDetail = devToolTabsNetworkContent.querySelector('.dmuka3-dev-tool-tabs-content-detail');
	var devToolTabsNetworkContentDetailStartDt = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-start-dt div');
	var devToolTabsNetworkContentDetailEndDt = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-end-dt div');
	var devToolTabsNetworkContentDetailDiffDt = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-diff-ms div');
	var devToolTabsNetworkContentDetailUrl = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-url div');
	var devToolTabsNetworkContentDetailMethod = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-method div');
	var devToolTabsNetworkContentDetailStatusCode = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-status-code div');
	var devToolTabsNetworkContentDetailOtherHeaders = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-other-headers pre');
	var devToolTabsNetworkContentDetailBody = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-body');
	var devToolTabsNetworkContentDetailResponse = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-response');
	var devToolTabsNetworkContentDetailClose = devToolTabsNetworkContentDetail.querySelector('.dmuka3-dev-tool-tabs-content-detail-close');
	// #endregion

	function dataFormat(data) {
		if (data === null || data === undefined) {
			return JSON.stringify(data);
		} else if (typeof data === 'string') {
			return data;
		} else {
			return JSON.stringify(data, null, 4);
		}
	}

	function timeFormat (date) {
		date = date || new Date();
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hour = date.getHours();

		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();

		var milliSeconds = date.getMilliseconds();

		return year + '-' + month + '-' + day + ' ' + (hour >= 10 ? hour : '0' + hour) + ':' + (minutes >= 10 ? minutes : '0' + minutes) + '.' + (seconds >= 10 ? seconds : '0' + seconds) + '.' + (milliSeconds < 10 ? '00' + milliSeconds : milliSeconds < 100 ? '0' + milliSeconds : milliSeconds);
	}

	function loadTrigger () {
		var enable = localStorage.getItem('dev-tool-enable') === 'true';
		var $devtool = {
			get enable () {
				return enable;
			},
			set enable (value) {
				enable = value;

				if (value === true) {
					localStorage.setItem('dev-tool-enable', 'true');

					devToolHeaderState.innerText = 'Active';
					devToolHeaderState.style.color = 'rgb(42, 189, 33)';
					devToolHeaderState.style.textShadow = '0px 0px 20px #fff';
				} else {
					localStorage.setItem('dev-tool-enable', 'false');

					devToolHeaderState.innerText = 'Passive';
					devToolHeaderState.style.color = '#b7b335';
					devToolHeaderState.style.textShadow = '0px 0px 20px #fff';
				}
			},
			colors: {
				'log': 'black',
				'error': 'red'
			},
			setShortcuts: function (value) {
				devToolJavascriptShortcuts.innerHTML = '<option selected value=""></option>';
				for (var i = 0; i < value.length; i++) {
					var option = value[i];
					var optionDOM = document.createElement('option');
					optionDOM.setAttribute('value', option.value);
					optionDOM.innerHTML = option.text;
					devToolJavascriptShortcuts.appendChild(optionDOM);
				}
			},
			clickProgresses: [function (e) {
				// LEFT TOP
				if (e.pageX < window.innerWidth / 4 && e.pageY < window.innerHeight / 4) {
					return true;
				}
			}, function (e) {
				// RIGHT TOP
				if (e.pageX > window.innerWidth / 4 && e.pageY < window.innerHeight / 4) {
					return true;
				}
			}, function (e) {
				// RIGHT BOTTOM
				if (e.pageX > window.innerWidth / 4 && e.pageY > window.innerHeight / 4) {
					return true;
				}
			}, function (e) {
				// LEFT BOTTOM
				if (e.pageX < window.innerWidth / 4 && e.pageY > window.innerHeight / 4) {
					return true;
				}
			}, function (e) {
				// LEFT BOTTOM
				if (e.pageX < window.innerWidth / 4 && e.pageY > window.innerHeight / 4) {
					return true;
				}
			}, function (e) {
				// RIGHT BOTTOM
				if (e.pageX > window.innerWidth / 4 && e.pageY > window.innerHeight / 4) {
					return true;
				}
			}, function (e) {
				// RIGHT TOP
				if (e.pageX > window.innerWidth / 4 && e.pageY < window.innerHeight / 4) {
					return true;
				}
			}, function (e) {
				// LEFT TOP
				if (e.pageX < window.innerWidth / 4 && e.pageY < window.innerHeight / 4) {
					return true;
				}
			}]
		};
		$devtool.enable = $devtool.enable;
		window['$devtool'] = $devtool;

		function openDevTool () {
			setTimeout(function () {
				devToolParentDOM.style.display = 'block';
				devToolTabsNetworkContent.scrollTop = devToolTabsNetworkContent.scrollHeight - devToolTabsNetworkContent.offsetHeight;
				devToolTabsLogContent.scrollTop = devToolTabsLogContent.scrollHeight - devToolTabsLogContent.offsetHeight;	
			}, 1000);
		}

		// #region DOM Load
		devToolTabsNetworkContentDetailClose.addEventListener('click', function (e) {
			devToolTabsNetworkContentDetail.style.display = 'none';
		});
		devToolTabsLogMenu.addEventListener('click', function (e) {
			devToolTabsLogMenu.style.opacity = '1';
			devToolTabsLogContent.style.display = 'block';
			devToolTabsNetworkMenu.style.opacity = '0.5';
			devToolTabsNetworkContent.style.display = 'none';

			devToolTabsLogContent.scrollTop = devToolTabsLogContent.scrollHeight - devToolTabsLogContent.offsetHeight;
		});
		devToolTabsNetworkMenu.addEventListener('click', function (e) {
			devToolTabsLogMenu.style.opacity = '0.5';
			devToolTabsLogContent.style.display = 'none';
			devToolTabsNetworkMenu.style.opacity = '1';
			devToolTabsNetworkContent.style.display = 'block';

			devToolTabsNetworkContent.scrollTop = devToolTabsNetworkContent.scrollHeight - devToolTabsNetworkContent.offsetHeight;
		});
		devToolTabsClearDOM.addEventListener('click', function (e) {
			if (devToolTabsNetworkContent.style.display === 'block') {
				devToolTabsNetworkContentDetail.remove();
				devToolTabsNetworkContent.innerHTML = '';
				devToolTabsNetworkContent.appendChild(devToolTabsNetworkContentDetail);
			} else {
				devToolTabsLogContent.innerHTML = '';
			}
		});
		devToolJavascriptRun.addEventListener('click', function (e) {
			var result = new Function(devToolJavascriptInput.value)();
			if (result !== undefined) {
				console.log(result);
			}
		});
		devToolJavascriptClear.addEventListener('click', function (e) {
			devToolJavascriptInput.value = '';
		});
		devToolJavascriptShortcuts.addEventListener('change', function (e) {
			var value = this.value;
			this.value = '';
			devToolJavascriptInput.value = value;
		});
		devToolHeaderState.addEventListener('click', function (e) {
			$devtool.enable = $devtool.enable === false;
		});

		devToolHeaderClose.addEventListener('click', function (e) {
			devToolParentDOM.style.display = 'none';
		});
		devToolHeaderClose.addEventListener('touchstart', function (e) {
			devToolParentDOM.style.display = 'none';
		});
		// #endregion

		var clickIndex = 0;

		var checking = false;
		function clickCheck (e) {
			if (checking === true) {
				return;
			}
			checking = true;

			setTimeout(function () {
				checking = false;
			}, 1);

			if ($devtool.clickProgresses[clickIndex](e) === true) {
				clickIndex++;
				if (clickIndex >= $devtool.clickProgresses.length) {
					clickIndex = 0;
					openDevTool();
				}
			} else {
				clickIndex = 0;

				if ($devtool.clickProgresses[clickIndex](e) === true) {
					clickIndex++;
					if (clickIndex >= $devtool.clickProgresses.length) {
						clickIndex = 0;
						openDevTool();
					}
				}
			}
		}

		var clickDisable = false;
		document.addEventListener('click', function (e) {
			if (clickDisable === true) {
				return;
			}
			clickCheck(e);
		});

		document.addEventListener('touchstart', function (e) {
			clickDisable = true;
			e.pageX = e.touches[0].pageX;
			e.pageY = e.touches[0].pageY;
			clickCheck(e);
		});
	}
	loadTrigger();
	// #endregion

	if ($devtool.enable !== true) {
		return;
	}

	// #region Console
	function consoleLog (args, color) {
		var time = timeFormat();

		var logHTML = '';
		logHTML += '<div class="dmuka3-dev-tool-log-item" style="width:100%;font-size:2vh;box-sizing:border-box;padding-left:1vh;border-bottom:1px solid #ccc;">';
		logHTML += '	<div class="dmuka3-dev-tool-log-item-time" style="vertical-align:top;display:inline-block;line-height:3vh;width:25vh;border-right:1px dashed #ddd;border-bottom:1px dashed #ddd;">';
		logHTML += '		' + time;
		logHTML += '	</div>';
		logHTML += '	<pre class="dmuka3-dev-tool-log-item-data" style="display:inline-block;margin:0px;width:calc(100% - 26vh);"></pre>';
		logHTML += '</div>';

		var virtualDOM = document.createElement('div');
		virtualDOM.innerHTML = logHTML;

		var logDOM = virtualDOM.childNodes[0];
		var logDataDOM = logDOM.querySelector('.dmuka3-dev-tool-log-item-data');
		if (args.length === 1) {
			logDataDOM.innerText = dataFormat(args[0]);
		} else if (args.length === 2) {
			var msgDOM = document.createElement('b');
			msgDOM.innerText = args[0];
			logDataDOM.appendChild(msgDOM);

			logDataDOM.innerHTML += '&nbsp;=&nbsp;';

			virtualDOM.innerText = dataFormat(args[1]);
			logDataDOM.innerHTML += '<i>' + virtualDOM.innerHTML + '</i>';
		}
		logDataDOM.style.color = $devtool.colors[color];

		devToolTabsLogContent.appendChild(logDOM);

		if (devToolTabsLogContent.scrollHeight - devToolTabsLogContent.offsetHeight - devToolTabsLogContent.scrollTop <= 100) {
			devToolTabsLogContent.scrollTop = devToolTabsLogContent.scrollHeight - devToolTabsLogContent.offsetHeight;
		}
	}

	// #region Console Log
	var nativeConsoleLog = console.log;
	console.log = function () {
		if ($devtool.enable === true) {
			consoleLog.call(this, arguments, 'log');
		}
		nativeConsoleLog.apply(this, arguments);
	};
	// #endregion

	// #region Console Error
	var nativeConsoleError = console.error;
	console.error = function () {
		if ($devtool.enable === true) {
			consoleLog.call(this, arguments, 'error');
		}
		nativeConsoleError.apply(this, arguments);
	};
	// #endregion
	// #endregion

	// #region Network
	var nativeXHR = XMLHttpRequest;
	window['XMLHttpRequest'] = function () {
		var devToolNetworkDOM = null;
		var devToolNetworkStatusDOM = null;
		var devToolNetworkMethodDOM = null;
		var devToolNetworkUrlDOM = null;

		var xhr = new nativeXHR(arguments);

		var devToolXHR = {
			startDt: new Date(),
			endDt: new Date(),
			method: 'GET',
			url: '',
			body: null,
			onabort: function () {
				devToolXHR.endDt = new Date();
				if (devToolNetworkDOM === null) {
					return;
				}

				devToolNetworkDOM.style.backgroundColor = '#ffbfbf';
				devToolNetworkStatusDOM.innerText = 'Abort';
			},
			onreadystatechange: function () {
				if (xhr.readyState == 4) {
					devToolXHR.endDt = new Date();
					if (devToolNetworkDOM !== null) {
						if (xhr.status >= 300) {
							devToolNetworkDOM.style.backgroundColor = '#ffbfbf';
						}
						devToolNetworkStatusDOM.innerText = xhr.status;
					}
				}
			},
			ontimeout: function () {

			},
			onerror: function () {

			},
			onload: function () {

			},
			onloadend: function () {

			},
			onloadstart: function () {

			},
			onprogress: function () {

			}
		};

		// #region Default Events
		xhr.onabort = function () {
			devToolXHR.onabort.apply(this, arguments);
		};
		xhr.onreadystatechange = function () {
			devToolXHR.onreadystatechange.apply(this, arguments);
		};
		xhr.ontimeout = function () {
			devToolXHR.ontimeout.apply(this, arguments);
		};
		xhr.onerror = function () {
			devToolXHR.onerror.apply(this, arguments);
		};
		xhr.onload = function () {
			devToolXHR.onload.apply(this, arguments);
		};
		xhr.onloadend = function () {
			devToolXHR.onloadend.apply(this, arguments);
		};
		xhr.onloadstart = function () {
			devToolXHR.onloadstart.apply(this, arguments);
		};
		xhr.onprogress = function () {
			devToolXHR.onprogress.apply(this, arguments);
		};
		// #endregion

		var result = {
			// #region Events
			get onabort () {
				return xhr.onabort;
			},
			set onabort (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.onabort = function () {
					devToolXHR.onabort.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			get onreadystatechange () {
				return xhr.onreadystatechange;
			},
			set onreadystatechange (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.onreadystatechange = function () {
					devToolXHR.onreadystatechange.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			get ontimeout () {
				return xhr.ontimeout;
			},
			set ontimeout (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.ontimeout = function () {
					devToolXHR.ontimeout.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			get onerror () {
				return xhr.onerror;
			},
			set onerror (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.onerror = function () {
					devToolXHR.onerror.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			get onload () {
				return xhr.onload;
			},
			set onload (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.onload = function () {
					devToolXHR.onload.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			get onloadend () {
				return xhr.onloadend;
			},
			set onloadend (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.onloadend = function () {
					devToolXHR.onloadend.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			get onloadstart () {
				return xhr.onloadstart;
			},
			set onloadstart (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.onloadstart = function () {
					devToolXHR.onloadstart.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			get onprogress () {
				return xhr.onprogress;
			},
			set onprogress (value) {
				if (value === undefined || value === null) {
					return;
				}

				xhr.onprogress = function () {
					devToolXHR.onprogress.apply(this, arguments);
					value.apply(this, arguments);
				};
			},
			// #endregion
			get readyState () {
				return xhr.readyState;
			},
			get response () {
				return xhr.response;
			},
			get responseText () {
				return xhr.responseText;
			},
			get responseType () {
				return xhr.responseType;
			},
			set responseType (value) {
				xhr.responseType = value;
			},
			get responseURL () {
				return xhr.responseURL;
			},
			get responseXML () {
				return xhr.responseXML;
			},
			get status () {
				return xhr.status;
			},
			get statusText () {
				return xhr.statusText;
			},
			get timeout () {
				return xhr.timeout;
			},
			set timeout (value) {
				xhr.timeout = value;
			},
			get upload () {
				return xhr.upload;
			},
			get withCredentials () {
				return xhr.withCredentials;
			},
			set withCredentials (value) {
				xhr.withCredentials = value;
			},
			// #region Methods
			abort: function () {
				return xhr.abort.apply(xhr, arguments);
			},
			getAllResponseHeaders: function () {
				return xhr.getAllResponseHeaders.apply(xhr, arguments);
			},
			getResponseHeader: function () {
				return xhr.getResponseHeader.apply(xhr, arguments);
			},
			open: function () {
				if (arguments.length > 0) {
					devToolXHR.method = arguments[0];
				}
				if (arguments.length > 1) {
					devToolXHR.url = arguments[1];
				}

				return xhr.open.apply(xhr, arguments);
			},
			overrideMimeType: function () {
				return xhr.overrideMimeType.apply(xhr, arguments);
			},
			send: function () {
				if (arguments.length > 0) {
					if (arguments[0] !== null && arguments[0] !== undefined && arguments[0].constructor.name === 'FormData') {
						var object = {};
						arguments[0].forEach(function (value, key) {
							object[key] = value;
						});
						devToolXHR.body = object;
					} else {
						devToolXHR.body = arguments[0];
					}
				}

				// #region Create Network DOM
				var networkHTML = '';
				networkHTML += '<div class="dmuka3-dev-tool-network-item" style="width:100%;font-size:2vh;box-sizing:border-box;padding-left:1vh;border-bottom:1px solid #ccc;display:flex;">';
				networkHTML += '	<div class="dmuka3-dev-tool-network-item-status" style="text-align:center;display:inline-block;line-height:3vh;width:10vh;border-right:1px dashed #ccc;">Pending</div>';
				networkHTML += '	<div class="dmuka3-dev-tool-network-item-method" style="text-align:center;display:inline-block;line-height:3vh;width:10vh;border-right:1px dashed #ccc;"></div>';
				networkHTML += '	<div class="dmuka3-dev-tool-network-item-url" style="display:inline-block;line-height:3vh;margin:0px;width:calc(100% - 22vh);overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;padding-left:1vh;"></div>';
				networkHTML += '</div>';

				var virtualDOM = document.createElement('div');
				virtualDOM.innerHTML = networkHTML;

				devToolNetworkDOM = virtualDOM.childNodes[0];
				devToolNetworkStatusDOM = devToolNetworkDOM.querySelector('.dmuka3-dev-tool-network-item-status');
				devToolNetworkMethodDOM = devToolNetworkDOM.querySelector('.dmuka3-dev-tool-network-item-method');
				devToolNetworkUrlDOM = devToolNetworkDOM.querySelector('.dmuka3-dev-tool-network-item-url');

				devToolNetworkMethodDOM.innerText = devToolXHR.method;
				devToolNetworkUrlDOM.innerText = devToolXHR.url;

				devToolTabsNetworkContent.appendChild(devToolNetworkDOM);
				if (devToolTabsNetworkContent.scrollHeight - devToolTabsNetworkContent.offsetHeight - devToolTabsNetworkContent.scrollTop <= 100) {
					devToolTabsNetworkContent.scrollTop = devToolTabsNetworkContent.scrollHeight - devToolTabsNetworkContent.offsetHeight;
				}

				devToolNetworkDOM.addEventListener('click', function (e) {
					devToolTabsNetworkContentDetail.style.display = 'block';
					devToolTabsNetworkContentDetailStartDt.innerText = timeFormat(devToolXHR.startDt);
					devToolTabsNetworkContentDetailEndDt.innerText = timeFormat(devToolXHR.endDt);
					devToolTabsNetworkContentDetailDiffDt.innerText = (devToolXHR.endDt - devToolXHR.startDt) + ' ms';
					devToolTabsNetworkContentDetailUrl.innerText = devToolXHR.url;
					devToolTabsNetworkContentDetailMethod.innerText = devToolXHR.method;
					devToolTabsNetworkContentDetailStatusCode.innerHTML = devToolNetworkStatusDOM.innerHTML;
					devToolTabsNetworkContentDetailOtherHeaders.innerText = '';
					var headers = xhr.getAllResponseHeaders().split('\n');
					for (var i = 0; i < headers.length; i++) {
						var header = headers[i];
						devToolTabsNetworkContentDetailOtherHeaders.innerText += header + '\n';
					}
					devToolTabsNetworkContentDetailBody.innerText = JSON.stringify(devToolXHR.body, null, 4);
					try {
						devToolTabsNetworkContentDetailResponse.innerText = JSON.stringify(JSON.parse(xhr.response), null, 4);
					} catch (error) {
						devToolTabsNetworkContentDetailResponse.innerText = xhr.response;
					}
				});
				devToolXHR.startDt = new Date();
				// #endregion

				return xhr.send.apply(xhr, arguments);
			},
			setRequestHeader: function () {
				return xhr.setRequestHeader.apply(xhr, arguments);
			}
			// #endregion
		};

		result.constructor = {
			name: 'XMLHttpRequest'
		};

		return result;
	};
	// #endregion
})();