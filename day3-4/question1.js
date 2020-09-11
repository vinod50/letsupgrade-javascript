function first()
{
    const element=document.getElementsByClassName("change");
    element[0].src ='https://img.etimg.com/thumb/width-1200,height-900,imgsize-920116,resizemode-1,msid-66950888/magazines/travel/wish-to-enjoy-a-spectacular-sunrise-sunset-well-tell-you-where-to-go.jpg';
}

function second() {
    const element = document.getElementsByClassName("change");
    if(element[0].src.match(('https://img.etimg.com/thumb/width-1200,height-900,imgsize-920116,resizemode-1,msid-66950888/magazines/travel/wish-to-enjoy-a-spectacular-sunrise-sunset-well-tell-you-where-to-go.jpg') || ('https://i.ytimg.com/vi/SN3xlcjbvUo/maxresdefault.jpg'))){
        element[0].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/SunsetHikkaduwa-April2012.JPG/321px-SunsetHikkaduwa-April2012.JPG';
    }
    else{
        element[0].src ="https://i.ytimg.com/vi/SN3xlcjbvUo/maxresdefault.jpg";
    }
}
function third() {
    const element = document.getElementsByClassName("change");
    element[0].src ="https://i.ytimg.com/vi/SN3xlcjbvUo/maxresdefault.jpg";
}