//Save options to localSorage.

function checkExisted(newUrl)
{
    var num = localStorage["count"];
    for(var i=0; i<num; ++i)
    {
        var urli = "url" + i;
        var url = localStorage[urli];
        if(newUrl == url) return true;
    }
    return false;
}

function save_options()
{
    var url = document.getElementById("url").value; //get the url
    if(url)
    {
        var existed = checkExisted(url);
        if(!existed)
        {
            var num = localStorage["count"];
            var urli = "url" + num;
            localStorage[urli] = url;
            localStorage["count"] = parseInt(num) + 1;
        }
    }

    restore_options();
}

function restore_options()
{
    var num = localStorage["count"];
    document.getElementById("weblist").innerHTML = "<p>";
    for(var i = 0; i < num; ++i)
    {
        var urli = "url" + i;
        var url = localStorage[urli];
        if(url)
        {
            document.getElementById("weblist").innerHTML = document.getElementById("weblist").innerHTML+ "</br>" + url;
        }
    }
    document.getElementById("weblist").innerHTML = document.getElementById("weblist").innerHTML + "</p>";

}

function clear_options()
{
    var num = localStorage["count"];
    for(var i = 0; i < num; ++i)
    {
        var urli = "url" + i;
        localStorage[urli] = "";
    }
    localStorage["count"] = 0;
    restore_options();
}

document.addEventListener('DOMContentLoaded', function()
{
    document.querySelector('#btnsave').addEventListener('click', save_options);
    document.querySelector('#btndelete').addEventListener('click', clear_options);
    window.addEventListener('load', restore_options);
});