//添加
function addElement(){
    var In=document.getElementById('needIn');
    var newElement=document.getElementById('node').cloneNode(true);

    newElement.removeAttribute('id');
    newElement.querySelector('.number').innerHTML=document.getElementById('content').querySelectorAll('.node').length;
    newElement.querySelector('.literal').innerHTML=In.value;

    document.getElementById('content').appendChild(newElement);
    //输入完了，清除字符串
    In.value='';
}

//标签标号
function assignNumber(){
    var content=document.getElementById('content');
    var nodes=content.querySelectorAll('.node');

    for(var i=1;i<nodes.length;i++){
        nodes[i].querySelector('.number').innerHTML=i;
    }
}

//双击删除
function deleteElement(target){
    target.parentNode.removeChild(target);
    assignNumber();
}

//鼠标反馈
function highLight(target){
    target.style.height='80px';
}
function lowLight(target) {
	target.style.height = '60px';
}

//清空
function clear(){
        console.log('okay');
        var content=document.getElementById('content');
        var notes=content.querySelectorAll('.node');
        for(var i=1;i<notes.length;i++){
            content.removeChild(notes[i]);
        }
}//防止误触
function Clear(){
    if(confirm("确认清空记事本？")){
        clear();
    }
}

//倒序
function invertOrder(){
    var content=document.getElementById('content');
    var notes=content.querySelectorAll('.node');
    //先清空
    clear();
    //再添加
    for(var i=notes.length-1;i>0;i--){
        content.appendChild(notes[i]);
    }
    //标号
    assignNumber();
}

//更换背景图片
function changeBackground(){
    // 文件选择器
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        const whole = document.getElementById('whole');
        whole.style.backgroundImage = `url('${reader.result}')`;
        };
    };
    input.click();
}
