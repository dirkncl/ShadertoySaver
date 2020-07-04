var scrollbar = `
  ::-webkit-scrollbar {
      height: 8px;
      width: 8px;
      background: #404040;
  }
  
  ::-webkit-scrollbar-thumb
  {
      background: #909090;
      border-radius: 0ex;
  }
  
  ::-webkit-scrollbar-corner
  {
      background: #000;
  }
  
`;



var general = `

::-webkit-input-placeholder
{
	font-style:italic;
}
input:-moz-placeholder, textarea:-moz-placeholder
{
	font-style:italic;
}
input.placeholder-text, textarea.placeholder-text
{
	font-style:italic;
}

pre 
{
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
}

@font-face
{
    font-family: Lobster;
    src: url("./img/lobster.otf") format("opentype");
}

div#centerScreen
{
    left: 50%;
    top: 50%;
    position: absolute;
}

a.headerLinks:hover
{
    background-color:#505050;
    color : #ff8020;
}

body
{
    color: #000000;
    font-size:12px;
    font-style:normal;
    font-family:Tahoma,Arial;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding:0px;
    margin:0px;
    text-align: left;
    /*background-color: #d0d0d0;*/
    background-color: #000000;
    background-repeat: repeat;
    user-select: text;
}

a,
a:hover,
a:visited
{
  color : inherit;
}

div#content {
    width: 95%;
    overflow: hidden;
    margin: auto;
    padding: 0px;
    min-height: calc(100vh - 80px);
    //box-sizing: border-box;
}


.notificationCount
{
 background-color:#ff0000;
 padding-left:3px;
 padding-right:1px;
 padding-top:1px;
 padding-bottom:1px;
}

div#header
{
    background-color: #404040;
    top: 0px;
    left: 0px;
    width: 100%;
    padding: 0;
    margin: 0;
    color: #ffffff;
    display: flex;
    flex-direction:row;
}

#headerBlock1
{
    width: 50%;
    display:flex;
    align-items:center;
}

a#headerTitle
{
    font-size: 2.25em;
    font-family: Lobster,Tahoma,Arial;
    text-decoration: none;
    padding-left:32px;
    padding-right:32px;
}

#headerSearch
{
    display: inline-block;
    color: #000000;
    width: 300px;
}

input[type=search]#mySearch
{
    width: 100%;
    border-radius: 6px;
    border: 1px solid black;
    padding:12px;
}

#headerBlock2
{
    width: 50%;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
}


a#headerTitle:hover
{
    color : #ff8020;
}

a.headerLinks
{
    font-weight: bold;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 14px;
    padding-right: 14px;
    margin:0px;
    text-decoration: none;
    transition: background-color 0.15s linear, color 0.15s linear;
}

#footer
{
    background-color: rgba(64,64,64,0.25);
    color: #000000;
    padding: 0px;
    margin: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

#footer div
{
    padding-top:10px;
    padding-bottom:0px;
    padding-left:16px;
    padding-right:16px;
}

#footer div ul
{
    margin-left:0px;
    padding-left:16px;
}

#footer div ul li
{
    padding-top:6px;
}

a.regular
{
    font-weight:bold;
    text-decoration:none
}

a.regular:hover
{
  color : #ff8020;
}

a.user
{
    font-weight:bold;
    text-decoration:none;
}

a.user:hover
{
  color : #ff8020;
  text-decoration: underline;
}

.uiButton
{
    border: none;
    outline: none;
    margin: 0px;
    padding: 0px;
    width: 22px;
    height: 22px;
    position: absolute;
    cursor: pointer;
    border-radius: 4px;
}

.uiButton:hover
{
    box-shadow: inset 0px 0px 1px 1px #808080, 0px 0px 1px 1px #808080;
}

.uiDivBUtton
{
    cursor:pointer;
}

.uiDivBUtton:hover
{
    color: #ffffff;
}


.dialog
{
    display: block;
    background-color: #e0e0e0;
    color: #000000;
    border:1px solid #000;
    padding:0px;
    margin:0px;
    text-align:left;
    border-radius: 4px;
    box-shadow:4px 4px 6px 0px rgba(0,0,0,0.5);
    overflow: hidden;
    z-index:1000;
    visibility: hidden;
    opacity:0;
    -moz-transition: opacity 0.25s linear,visibility 0.25s linear;
    -webkit-transition: opacity 0.25s linear,visibility 0.25s linear;
    transition: opacity 0.25s linear,visibility 0.25s linear;
}

.dialogHeader
{
    left:0px;
    top: 0px;
    width:100%;
    height:32px;
    position: absolute;
    background-color: #808080;
    cursor:move;
}

.dialogTitle
{
    left: 12px;
    top: 4px;
    position: absolute;
    padding: 0px;
    margin: 0px;
    color:#000000;
    font-size:1.5em;
    text-align: left;
    user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
}

.dialogOverlay
{
    z-index:1000;

    visibility: hidden;
    opacity:0;
    -moz-transition: opacity 0.25s linear,visibility 0.25s linear;
    -webkit-transition: opacity 0.25s linear,visibility 0.25s linear;
    transition: opacity 0.25s linear,visibility 0.25s linear;

    left:0px;
    top:0px;
    padding:0px;
    margin:0px;
    width:100%;
    height:100%;
    position:absolute;

    background-color:rgba(0,0,0,.4);
}

.viewsIcon, .likesIcon
{
    border: none;
    outline: none;
    display:inline-block;
    background-repeat:no-repeat;
    top:0px;
    left:0px;
    padding:0px;
    padding-right: 2px;
    margin:0px;
    position:relative;
}

.userPictureSmall
{
    background-color:#808080;
    border: 1px solid #000000;
    width:32px;
    height:32px;
}

.commentsIcon
{
    border: none;
    outline: none;
    display:inline-block;
    top:3px;
    left:0px;
    padding:0px;
    padding-right: 2px;
    margin:0;
    position:relative;
}

.dialogCloseButton
{
    right:8px;
    top: 4px;
    width:22px;
    height:22px;
    position: absolute;
    background-image: url("./img/close.png");
    cursor: pointer;
    border-radius: 4px;
}

.dialogCloseButton:hover
{
    box-shadow: inset 0px 0px 4px 2px #ffffff, 0px 0px 4px 2px #ffffff;
}

.dialogContentButtons
{
     padding:0;
     border:0;
     text-align: justify;
     left: 24px;
     bottom:40px;
     position:absolute;
}

.dialogButton
{
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    padding-bottom:5px;
    padding-top:4px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left:4px;
    margin-right:4px;
    text-decoration: none;
    color:#000000;
    width: 80px;
    -moz-transition:    background-color 0.15s linear, color 0.15s linear;
    -webkit-transition: background-color 0.15s linear, color 0.15s linear;
    transition:         background-color 0.15s linear, color 0.15s linear;
}

.dialogButton:hover
{
  background-color:#808080;
  color : #ff8020;
}

.dialogCloseButton:hover
{
    box-shadow: inset 0px 0px 4px 2px #ffffff, 0px 0px 4px 2px #ffffff;
}

.dialogContent
{
    color: inherit;
    overflow: auto;
    width:100%;
    height:100%;
    left: 0px;
    top: 32px;
    position:absolute
}

.dialogContentBody
{
    color: inherit;
    width:100%;
    height:auto;
    padding-top:24px;
    padding-bottom:24px;
    padding-left:24px;
    padding-right:24px;
    text-align: left;
}

.formButton
{
    font-weight:bold;
	color:#ffffff;
	border:none;
    text-align:center;
	background-color:#808080;
    border-radius: 4px;
	padding-left:8px;
	padding-right:8px;
	padding-top:4px;
	padding-bottom:4px;
    cursor:pointer;
    min-width:80px;
    box-sizing: border-box;
}

.formButton:hover
{
	background-color: #e0e0e0;
}

.formButton:disabled
{
	color:#b0b0b0;
	background-color:#808080;
}

.formButtonSmall
{
    color:#ffffff;
    border:none;
    text-align:center;
    background-color:#808080;
    border-radius: 4px;
    padding-left:2px;
    padding-right:2px;
    padding-top:2px;
    padding-bottom:2px;
    cursor:pointer;
    min-width:40px;
}

.formButtonSmall:hover
{
    background-color: #e0e0e0;
}

.formButtonSmall:disabled
{
    color:#b0b0b0;
    background-color:#808080;
}

.formButtonSmall.disabled2,
.formButton.disabled2 { color:#b0b0b0; background-color:#808080; pointer-events: none; }

.inputForm
{
    padding-left:2%;
    padding-right:2%;
    resize: none;
    text-align: left;
    background-color:#e0e0e0;
    outline: none;
    border-radius: 4px;
    border: 1px solid #808080;
    color:inherit;
    box-sizing: border-box;
}

.inputForm:focus
{
    border: 1px solid #AFCDD8;
    background-color: #EBF2F4;
}

.transparentPannel
{
    background-color:rgba(64,64,64,0.1);
    padding:16px;
}

.comment, .commentSelf, .commentNew
{
    border-radius: 4px;
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 6px;

    padding: 14px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 32px auto 8px;
    grid-template-rows: 1fr;
    grid-gap:8px;
}

.comment:nth-child(even)
{
    background-color: rgba(64,64,64,0.1);
}

.comment:nth-child(odd)
{
    background-color: rgba(128,128,128,0.1);
}

.commentSelf
{
    background-color: rgba(240,160,64,0.1);
}

.commentNew
{
    padding-right: 0px;
    grid-template-columns: 40px auto;
}

.commentContent
{
    vertical-align: top;
    text-align: left;
    word-break: break-all;
    word-break: break-word;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
}


/* ----------------------- media resolutions ------------------------ */

@media screen and (max-width:799px)
{
    div#header {flex-direction:column; }
    #headerBlock1 { width:100%; }
    #headerBlock2 { width:100%; justify-content: space-around;}
    div#headerSearch {width:200px;}
    input#mySearch { width:200px; left:21px; height:22px; border-radius:6px; padding-left:8px; padding-right:8px; }
    .previewText { width:130px; }
    .transparentPannel { padding:10px; }
}

@media screen and (min-width:800px) and (max-width:1279px)
{
    body { font-size: 9px; }
    div#headerSearch {width: 250px;}
    input#mySearch { width:250px; left:21px; height:22px; border-radius:6px; padding-left:8px; padding-right:8px; }
    .previewText { width:130px; }
    .transparentPannel { padding:11px; }
}

@media screen and (min-width:1280px) and (max-width:1439px)
{
    body { font-size: 10px; }
    div#headerSearch {width: 300px;}
    input#mySearch { width:300px; left:21px; height:22px; border-radius:6px; padding-left:8px; padding-right:8px; }
    .dialogHeader { height:28px; }
    .previewText { width:180px; }
    .transparentPannel { padding:12px; }
}

@media screen and (min-width:1440px) and (max-width:1919px)
{
    div#headerSearch {width: 300px;}
    input#mySearch { width:300px; left:21px; height:22px; border-radius:6px; padding-left:8px; padding-right:8px; }
    .dialogHeader { height:28px; }
    .previewText { width:180px; }
    .transparentPannel { padding:12px; }
}

@media screen and (min-width:1920px) and (max-width:2559px)
{
    div#headerSearch {width: 300px;}
    input#mySearch { width:300px; left:21px; height:22px; border-radius:6px; padding-left:8px; padding-right:8px; }
    .dialogHeader { height:32px; }
    .previewText { width:220px; }
    .transparentPannel { padding:16px; }
}

@media screen and (min-width:2560px) 
{
    div#headerSearch {width: 300px;}
    input#mySearch { width:300px; left:21px; height:22px; border-radius:6px; padding-left:8px; padding-right:8px; }
    .dialogHeader { height:32px; }
    .previewText { width:220px; }
    .transparentPannel { padding:16px; }
}
body
{
    /*background-image: url("./img/themes/classic/background.jpg");*/
}
`;

var shadertoy = `
    .shaderPreview
    {
    display: block;
    background-color: #000000;
    background-image: url("./img/loading.gif");
    background-repeat: no-repeat;
    background-position: center;
    padding: 0px;
    margin: 0px;
    border: 0px solid #000000;
    border-radius: 8px;
    width:100%;
    height:100%;
    position: absolute;
    }

    .previewInfo
    {
    width: 100%;
    left: 0px;
    top: 2px;
    position: relative;
    visibility: hidden;
    }

    .previewCanvas
    {
    left: 0px;
    top: 0px;
    padding: 0px;
    margin: 0px;
    position: absolute;
    cursor: pointer;
    width:100%;
    height:100%;
    visibility: hidden;
    border-radius: 8px;
    border: 0px solid #000000;
    }

    .previewText
    {
        text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1px;
    }

    .previewTextUser
    {
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 3px;
    }

    .previewStats
    {
    padding-right: 1px;
    right: 0px;
    top: 0px;
    position: absolute;
    }

    .previewErrorContainer
    {
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    padding:0px;
    margin:0px;
    //position:absolute;
    background-color:#000000;
    border-radius:8px;
    cursor:pointer;
    visibility:hidden;
    }

    .previewErrorMessage
    {
    top:50%;
    position:absolute;
    width:100%;
    text-align:center;
    padding:0;
    margin:auto;
    color:#ff0000;
    font-size:2em;
    font-style:italic;
    }

    .previewNoGLContainter
    {
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    padding:0px;
    margin:0px;
    position:absolute;
    background-color:#000000;
    border-radius:8px;
    cursor:pointer;
    pointer-events:none;
    visibility:hidden;
    font-size:2em;
    }

    .previewNoGLMessage
    {
    width:86%;
    height:90%;
    padding-left:7%;
    padding-right:7%;
    padding-top:10%;
    padding-bottom:0px;
    color:#ff0000;
    position:absolute;
    visibility:hidden;
    }

    .previewThumbnailContainer
    {
    width:100%;
    height:100%;
    left:0px;
    top:0px;
    padding:0px;
    margin:0px;
    position:absolute;
    cursor:pointer;
    visibility:hidden;
    border-radius:8px;
    border:0px solid #000000;
    }

    .previewThumbnailImage
    {
    width:100%;
    height:100%;
    left:0px;
    top:0px;
    padding:0px;
    margin:0px;
    position:absolute;
    cursor:pointer;
    border-radius:8px;
    border:0px solid #000000;
    }

    .previewThumbnailIcon
    {
    width:14%;
    height:14%;
    left:0px;
    top:0px;
    padding:0px;
    padding-top:12px;
    margin:0px;
    position:absolute;
    color:#ffffff;
    background-color:#ff4000;
    border-radius:0px 0px 8px 0px;
    text-align:center;
    }


    .previewUIContainter
    {
    display: block;
    right:0px;
    top:0px;
    padding:0px;
    margin:0px;
    position:absolute;
    //cursor:pointer;
    //pointer-events:none;
    visibility:hidden;
    }

    .isVisible
    {
    visibility:visible;
    }
`;

var core = `
    div#wrapper
    {
        text-align: center;
        padding-top: 32px;
    }
    .searchResult
    {   
        color:ivory;
        margin: auto;
        padding: 0px;
        width: 70%;
    }
    .searchResultContainer
    {
        width: 100%;
        padding-bottom:56.25%;
        height: 0;
        position: relative;
    }
`;
/*if(!Element.prototype.addCssContent){
  Element.prototype.addCssContent = function(cssContent){
    return (this.appendChild((document.createElement('style'))).appendChild(document.createTextNode(cssContent)))
  }
}*/

(sty=document.createElement("style")).textContent=scrollbar+general,document.head.appendChild(sty)

