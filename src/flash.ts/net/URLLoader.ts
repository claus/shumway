/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations undxr the License.
 */
// Class: URLLoader
module Shumway.AVM2.AS.flash.net {
  import notImplemented = Shumway.Debug.notImplemented;
  export class URLLoader extends flash.events.EventDispatcher {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // ["data", "dataFormat", "bytesLoaded", "bytesTotal", "addEventListener", "load", "close", "_stream", "_httpResponseEventBound", "complete", "onStreamOpen", "onStreamComplete", "onStreamProgress", "onStreamIOError", "onStreamHTTPStatus", "onStreamHTTPResponseStatus", "onStreamSecurityError"];
    
    constructor (request: flash.net.URLRequest = null) {
      request = request;
      false && super(undefined);
      notImplemented("Dummy Constructor: public flash.net.URLLoader");
    }
    
    // JS -> AS Bindings
    
    data: any;
    dataFormat: string;
    bytesLoaded: number /*uint*/;
    bytesTotal: number /*uint*/;
    // addEventListener: (type: string, listener: ASFunction, useCapture: boolean = false, priority: number /*int*/ = 0, useWeakReference: boolean = false) => void;
    load: (request: flash.net.URLRequest) => void;
    close: () => void;
    _stream: flash.net.URLStream;
    _httpResponseEventBound: boolean;
    complete: () => any;
    onStreamOpen: (e: flash.events.Event) => any;
    onStreamComplete: (e: flash.events.Event) => any;
    onStreamProgress: (e: flash.events.ProgressEvent) => any;
    onStreamIOError: (e: flash.events.IOErrorEvent) => any;
    onStreamHTTPStatus: (e: flash.events.HTTPStatusEvent) => any;
    onStreamHTTPResponseStatus: (e: flash.events.HTTPStatusEvent) => any;
    onStreamSecurityError: (e: flash.events.SecurityErrorEvent) => any;
    
    // AS -> JS Bindings
    
  }
}
