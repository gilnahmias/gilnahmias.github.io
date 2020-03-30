if (self.CavalryLogger) { CavalryLogger.start_js(["4qmsI"]); }

__d("DataCollector",["CometBugReportStateUtils","Env","ErrorUtils","FBRTCBugReportStateUtils","JSLogger","LogHistory","MediaStream","MessagingBugReportStateUtils","ModuleDependencies","PerformanceStats","URI","VFRTCBugReportStateUtils","WorkGalahadBugReportStateUtils","ifRequired","performance"],function(a,b,c,d,e,f){var g,h,i,j,k={};function l(a){return typeof a.toString==="function"&&a.toString!==Object.prototype.toString?"[object toString='"+a.toString()+"']":"[object "+a.constructor.name+"]"}function m(a){var c=new Set();a=JSON.stringify(a,function(a,d){if(d instanceof b("MediaStream"))return"[mediaStream id="+d.id+"]";if(typeof d==="function")return"[function]";if(typeof d==="object"&&d!=null){if(d.constructor===Array||d.constructor===Object||d.constructor===Set||d.constructor===Map){if(c.has(d))return"[circular reference toString='"+l(d)+"']";c.add(d);return d.constructor===Map||d.constructor===Set?Array.from(d):d}return l(d)}return d});return a}Object.assign(k,{stringify:m,_metadata:{},_logs:{},addMetadata:function(a){Object.assign(k._metadata,a)},addLog:function(a,b){k._logs[a]=b},getMetadata:function(){return k._metadata},_collectMetadata:function(){k.addMetadata({URI:(g||(g=b("URI"))).getRequestURI().toString(),UserAgent:navigator.userAgent,ScriptPaths:k.getPageHistory()});return k._metadata},collectLogs:function(){k.addLog("cavalryid",k.getCavalryID());k.addLog("pageletperformance",b("PerformanceStats").getPageletStats());k.addLog("browser_performance",this._getBrowserPerformanceLogs());var a={};b("JSLogger").getDumpJSON?a=b("JSLogger").getDumpJSON():b("JSLogger").getEntries&&(a={log:b("JSLogger").getEntries(),now:Date.now(),env_start:(h||(h=b("Env"))).start});var c={Env:JSON.stringify(h||(h=b("Env"))),errors:(i||(i=b("ErrorUtils"))).history,ScriptPaths:k.getPageHistory(),ModuleDependencies:b("ModuleDependencies").getNotLoadedModules()};Object.assign(a,c);k.addLog("jslogger",a);b("LogHistory").getEntries().length>0&&k.addLog("Log History",b("LogHistory").formatEntries(b("LogHistory").getEntries()));try{k.addLog("messenger_state",b("MessagingBugReportStateUtils").getStateSnapshot())}catch(a){}try{k.addLog("rtweb_state",b("FBRTCBugReportStateUtils").getStateSnapshot())}catch(a){k.addLog("rtweb_state",{fetchError:a})}try{k.addLog("vfweb_state",b("VFRTCBugReportStateUtils").getStateSnapshot())}catch(a){k.addLog("vfweb_state",{fetchError:a})}try{k.addLog("galahad_state",b("WorkGalahadBugReportStateUtils").getStateSnapshot())}catch(a){k.addLog("galahad_state",{fetchError:a})}try{k.addLog("comet_state",b("CometBugReportStateUtils").getStateSnapshot())}catch(a){k.addLog("comet_state",{fetchError:a})}try{b("ifRequired")("MercuryServerDispatcher",function(a){k.addLog("mercury_request_errors",a.getRequestErrors())})}catch(a){k.addLog("mercury_request_errors",a.toString())}return m(k._logs)},_getBrowserPerformanceLogs:function(){if(!(j||(j=b("performance"))).getEntriesByType)return null;var a=(j||(j=b("performance"))).getEntriesByType("resource").slice(-500).map(function(a){return{startTime:a.startTime,redirectStart:a.redirectStart,redirectEnd:a.redirectEnd,fetchStart:a.fetchStart,duration:a.duration,domainLookupStart:a.domainLookupStart,domainLookupEnd:a.domainLookupEnd,connectStart:a.connectStart,connectEnd:a.connectEnd,requestStart:a.requestStart,responseStart:a.responseStart,responseEnd:a.responseEnd,entryType:a.entryType,initiatorType:a.initiatorType,name:a.name,transferSize:a.transferSize}});return JSON.stringify(a)},getPageHistory:function(){return[a._script_path]},getCavalryID:function(){if(a.CavalryLogger){var b=a.CavalryLogger.getInstance();if(b)return b.lid}return null},reset:function(){k._logs={},k._metadata={}}});e.exports=k},null);