var x=3;
const acc = []
var us;
var p;
var i=-1;
        class users{
            constructor(username,password){
                this.username=username;
                this.password=password;
                this.flag=0;
                this.balance=0;
                this.withdraw=0;
                this.depostie=0;
            }
        }
            function check(){
                var v1=document.getElementById('u').value;
                var v2=document.getElementById('p').value;
                if(localStorage.getItem(v1)){
                    const lol = JSON.parse(localStorage.getItem(v1));
                    var pw = lol.password;
                    if(pw==v2){
                        lol.flag=1;
                        localStorage.setItem('logged-in',JSON.stringify(lol));
                        localStorage.setItem(v1,JSON.stringify(lol));
                        document.getElementById('m1').innerHTML="you have succesfully logged in!!! "+" welcome to your bank system "+lol.username;
                        
                        // Check for redirect parameters
                        const urlParams = new URLSearchParams(window.location.search);
                        const redirect = urlParams.get('redirect');
                        
                        if(redirect === 'reservation') {
                            window.location.href = 'reservation.html';
                        } else {
                            window.location.href='system.html';
                        }
                    }
                    else{
                        x=x-1;
                        if(x>0){
                            document.getElementById('m1').innerHTML="incorrect password, you have "+x+" tries left!";
                        }
                        else{
                            
                            alert("you have enterd incorrect password too many times!!!, try again later");
                            window.location.href="bank_system.html";
                            
                        }
                    }
                }
                else{
                    document.getElementById('m1').innerHTML="invalid username!!!"
                }
            }
            function create(){
                i=i+1;
                const username = document.getElementById("u1").value;
                const password = document.getElementById("p1").value;
                if(localStorage.getItem(username)){
                    document.getElementById("m").innerHTML="user name already exists,try another";
                }
                else{
                    acc.push(new users(username,password));
                    localStorage.setItem(username,JSON.stringify(acc[i]));
                    
                    alert("account succesfully created!!, you can login now");
                    window.location.href="bs_login.html";
                } 
            }
            function wel(){
                const lol2 = JSON.parse(localStorage.getItem('logged-in'));
                document.getElementById("m3").innerHTML="Welcome "+lol2.username+" to the bank system";
            }
            function show(){
                const lol2 = JSON.parse(localStorage.getItem('logged-in'));
                document.getElementById("m4").innerHTML="Your balance is: "+lol2.balance;

            }
            function add(){
                const lol3 = JSON.parse(localStorage.getItem('logged-in'));
                lol3.depostie=Number(document.getElementById('e').value);
                localStorage.setItem('logged-in',JSON.stringify(lol3));
                
                lol3.balance=lol3.balance+lol3.depostie;
                alert("amount deposited is: "+lol3.depostie);
                localStorage.setItem(lol3.username,JSON.stringify(lol3));
                localStorage.setItem('logged-in',JSON.stringify(lol3));

                

            }
            function lo(){
                localStorage.setItem('logged-in',"none");
                alert("you have succesfuly logged out")
                window.location.href='bank_system.html';
                
            }
            function del(){
                const lol3 = JSON.parse(localStorage.getItem('logged-in'));
               
                lol3.withdraw=Number(document.getElementById('e').value);
                lol3.flag+=lol3.withdraw;
                localStorage.setItem('logged-in',JSON.stringify(lol3));
                
                lol3.balance=lol3.balance-lol3.withdraw;
                alert("amount withdrawn is: "+lol3.withdraw);
                localStorage.setItem(lol3.username,JSON.stringify(lol3));
                localStorage.setItem('logged-in',JSON.stringify(lol3));
            }