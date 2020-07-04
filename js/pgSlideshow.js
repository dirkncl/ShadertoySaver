var gData = {
    mShaderTime:40,
    mShader: null,
    mHttpReq: null,
    mOffset: 0
};


function myrefresh( id, slot, img, forceFrame, gui, guiID, renderID, time )
{
    if (gData.mShaders.mPreview.mCanvas == null && gData.mShaders.mPreview.mCanvas2D == null) return;
    if (gData.mShaders.mReady == false) return;
    if (gData.mShaders.gEffect.mGLContext == null)
    {
        previewShowNoWebGL(gData.mShaders.mPreview, true);
        gData.mShaders.mReady = false;
        return;
    }
    if( forceFrame )
    {
        gData.mShaders.gEffect.Paint(gData.mShaders.mTime, 1.0 / 60.0, 60.0, 0, 0, 0, 0, false);
    }
}

function startRendering()
{
    if (gData.mShaders.mReady == false) return;
    if (gData.mShaders.gEffect.mGLContext == null) return;

    var time = getRealTime();
    gData.mShaders.mTime = gData.mShaders.mTime0 + (time - gData.mShaders.mTo) / 1000.0;
    gData.mShaders.gEffect.Paint(gData.mShaders.mTime, 1.0 / 60.0, 60.0, 0, 0, 0, 0, false);//me.mMouseOriX, me.mMouseOriY, me.mMousePosX, me.mMousePosY);

    requestAnimFrame( startRendering );
}
               
function RefreshResults()
{
    var id = gData.mOffset % gShaderIDs.length;
    //document.title = gShaderIDs[id]
    gData.mHttpReq.abort();

    //-----------------------------------------------------------------

    previewShowLoading(gData.mShaders.mPreview);

    //-----------------------------------------------------------------

    var pv = gData.mShaders.mPreview;
    var xres = pv.mCanvas.offsetWidth;
    var yres = pv.mCanvas.offsetHeight;

    gData.mShaders.gEffect = new Effect(null, null, gData.mShaders.mGLContext, xres, yres, myrefresh, null, true, false);
    gData.mShaders.mShaderID = null;
    gData.mShaders.mReady = false;
    gData.mShaders.mTime = 10.0;
    gData.mShaders.mTime0 = 0.0;
    gData.mShaders.mTo = 0.0;

    gData.mShaders.mShaderID = gShaderIDs[id];

    //-----------------------------------------------------------------

    var str = "{ \"shaders\" : [\"" + gShaderIDs[id] + "\"] }";

    str = "s=" + encodeURIComponent(str) + "&nt=0&nl=0";;

    gData.mHttpReq.open("GET", "./shadertoy/"+ gShaderIDs[id] + ".json", true);
    gData.mHttpReq.responseType = "json";
    gData.mHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    gData.mHttpReq.onload = function ()
    {
        var jsn = gData.mHttpReq.response;
        var shaderObj = jsn[0];
        if (shaderObj == null) return;

        var res = gData.mShaders.gEffect.newScriptJSON(shaderObj);
        //console.log(res);
        var inf = shaderObj.info;
        
        document.title = htmlEntities(inf.name);
        console.log(htmlEntities(inf.name))
        document.getElementById("infoFile").style.width = inf.name.length+"ex";
        document.getElementById("infoFile").innerHTML = htmlEntities(inf.name);
    
        gData.mShaders.mPreview.mTextA.innerHTML = "\"" + htmlEntities(inf.name) + "\""+ "&nbsp;&nbsp;by&nbsp;";
        gData.mShaders.mPreview.mTextB.innerHTML = "<a target='_blank' class='user' href='https://www.shadertoy.com/user/" + htmlEntities(inf.username) + "'>" + htmlEntities(inf.username) + "</a>";
        
        //gData.mShaders.mPreview.mTextC.innerHTML = "";
        //gData.mShaders.mPreview.mBase.href = "#";
        //gData.mShaders.mPreview.mTextC.innerHTML = "<img src='./img/themes/" + gThemeName + "/views.png' class='viewsIcon'></img>" + inf.viewed + "    &nbsp;&nbsp;  <img src='./img/themes/" + gThemeName + "/likes.png' class='likesIcon'></img>" + inf.likes;
        //gData.mShaders.mPreview.mLink.href = "./view/" + gData.mShaders.mShaderID;

        if (res.mFailed == false)
        {
            gData.mShaders.mReady = true;
            previewShowRender(gData.mShaders.mPreview);
            myrefresh(null, null, null, true, false, 0, -1.0);
        }
        else
        {
            gData.mShaders.mReady = false;
            previewShowError(gData.mShaders.mPreview);
        }

        // start rendering
        gData.mShaders.mTo = performance.now();
        gData.mShaders.mTime0 = gData.mShaders.mTime;
        startRendering();
    }

    gData.mHttpReq.send(str);

    gData.mOffset = gData.mOffset + 1;
    setTimeout(RefreshResults, gData.mShaderTime * 1000);
}

function resultsResize()
{
    
        
    var srdiv = document.getElementById("searchResult");
    var w = srdiv.offsetWidth;
    var h = srdiv.offsetHeight;

    resizePreview(gData.mShaders.mPreview, w, h);
    gData.mShaders.gEffect.SetSize(w, h);
    myrefresh( 0, null, true, false,0,-1.0 );
    
}

function resultsInit()
{
    
    gData.mHttpReq = new XMLHttpRequest();

    let pv = createPreview( 0 );
    gData.mShaders = {};
    gData.mShaders.mPreview = pv;
    gData.mShaders.mGLContext = piCreateGlContext(pv.mCanvas, false, false, false, false);

    RefreshResults();

}
