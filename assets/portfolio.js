let splash=document.querySelector('.splash');
let splash1=document.querySelector('.splash-1');
let splashspan=document.querySelectorAll('.h1');
let splashspan2=document.querySelectorAll('.h2');
window.addEventListener('DOMContentLoaded',()=>
{
    setTimeout(()=>
    {
            splashspan.forEach((span,idx)=>{
                setTimeout(()=>{
                        span.classList.add('active');
                    },(idx +1)*400)
                   }   );
                setTimeout(()=>{
                    splashspan.forEach((span,idx)=>{
                        setTimeout(()=>{
                                span.classList.remove('active');
                                span.classList.add('fade');
                            },(idx +1)*50)
                           }   );
                    },2000
                    
                );
        
            }
            )
            splashspan2.forEach((span,idx)=>{
                setTimeout(()=>{
                        span.classList.add('active');
                    },(idx +1)*400)
                   }   );
                setTimeout(()=>{
                    splashspan2.forEach((span,idx)=>{
                        setTimeout(()=>{
                                span.classList.remove('active');
                                span.classList.add('fade');
                            },(idx +1)*50)
                           }   );
                    },2000);
                    setTimeout(()=>
                    {
                        splash.getElementsByClassName.top='-100vh';

                    },2300
                    )
}
)

    
