/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

import SecureAttachmentAPI from "./SecureAttachmentAPI";
import GraphAPIHelper from "./GraphAPIHelper";
import OfficeAPIHelper from "./OfficeAPIHelper";


function doNotDelete(){
    console.log("doNotDelete");
}

var secureAttachmentAPI = new SecureAttachmentAPI();

window.doNotDelete = doNotDelete;

//secureAttachmentAPI.test();

// without default
/*
export {
    SecureAttachmentAPI,
    GraphAPIHelper,
    OfficeAPIHelper
}
*/
