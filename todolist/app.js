let sb = document.querySelector('.submit');
let sr = document.querySelector('.type');
let dd = [];
let getBody = document.body;

let i = 0;


/*input에 있는 데이터를 받아오려면 그냥 받아 올 수 없다 
input에 글을 입력한다고 value에 글이 할당이 되진 않는다

왜 input에 글을 입력하면 value에 값이 저절로 할당 되지 않을까
왜 아무일이 일어나지 않을까
왜 그냥 input의 value를 읽을 수 없는 것 일까 
자바스크립트가 만들어 지고 나서 input 요소가 만들어 진걸까?


정적인 홈페이지를 운영했을 때
input 요소는 무슨 역할을 했을까?


자바스크립트로 


*/

console.log(getBody);
sr.addEventListener('input',function(e){
    

   
    dd = sr.value;

   

})



 sb.addEventListener('click',function(){
        i++;
        // 그리고 버튼을 클릭하면 
        // p태그에 내용이 저장이 되는데 왜 keydown이 일어난 만큼 추가가 되는 것 일까
        let createBox = document.createElement('div');
        let createP = document.createElement('p');
        let createBtn = document.createElement('button');
    
    
        // div를 body에 추가
        getBody.append(createBox);
        
        //input의 value를 p태그에 넣기
        createP.innerText = dd;
    
        //p태그 body에 추가
        createBox.append(createP);
        
        //button태그 body에 추가
        createBox.appendChild(createBtn);
    
        // div,p,button 태그에 클래스네임 추가
        createBox.className = 'wrapper';
        createBox.id = 'id'+i;
        createP.className = 'content';
        createBtn.className = 'delete';
        createBtn.id = 'id'+i;
    
        //button 태그에 버튼 이름 추가
        createBtn.textContent = '삭제';
    
        //input 화면 초기화
        sr.value = '';
    
        //저장된 input value 초기화
        dd = [];

        

        createBtn.addEventListener('click', function(e){
            const getWrap = document.querySelectorAll('.wrapper');
            console.log(getWrap);
            console.log(e.target);

            let ta = e.target;

        
       
            getWrap.forEach(function(wrap){
                
                if(ta.id == wrap.id){
                    console.log(wrap.id);

                    let getId = wrap.id;

                    //해당 id 값을 가진 div 가져오기
                    const getDiv = document.getElementById(getId);

                    //해당 div 삭제하기 
                    
                    getBody.removeChild(getDiv);

                   
                   
                }
            })

           
        });


      
    })
    
    

