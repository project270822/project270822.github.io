var moon_icon = document.querySelector(".moon-icon")
var sun_icon = document.querySelector(".sun-icon")
var header = document.querySelector(".header")
var hdu_name = document.querySelector(".hdu-name")
var hdu_us_name = document.querySelector(".hdu-us-name")
var menu_card = document.querySelector(".menu-card")
var menu_li = document.querySelector(".menu-li")
var all = document.querySelector(".all")

// dark mode
moon_icon.addEventListener("click",function(){
    moon_icon.classList.add("hide")
    sun_icon.classList.remove("hide")
    header.classList.add("dark-mode")
    hdu_name.classList.add("white-text")
    hdu_us_name.classList.add("white-text")
    all.classList.add("dark-mode")
    menu_card.classList.add("light-mode-menu")
})
sun_icon.addEventListener("click",function(){
    moon_icon.classList.remove("hide")
    sun_icon.classList.add("hide")
    header.classList.remove("dark-mode")
    hdu_name.classList.remove("white-text")
    hdu_us_name.classList.remove("white-text")
    all.classList.remove("dark-mode")
})

//close star page
var st_close = document.querySelector(".st-close")
var start_page = document.querySelector(".start-page")
var start_bt = document.querySelector(".st-bt")

st_close.addEventListener("click",function(){
    start_page.classList.add("hide1")
})

start_bt.addEventListener("click",function(){
    start_page.classList.add("hide1")
})

//close search card
var search_close = document.querySelector(".search-close")
var search_space = document.querySelector(".search-space")
var search_icon = document.querySelector(".search-icon")

search_close.addEventListener("click",function(){
    search_space.classList.add("hide1")
    search_icon.classList.remove("hide1")
})


search_icon.addEventListener("click",function(){
    search_icon.classList.add("hide1")
    search_space.classList.remove("hide1")
})

// menu processing
var menu_space = document.querySelector(".menu-space")
var menu_close = document.querySelector(".menu-close")
var menu_icon = document.querySelector(".menu-icon")

menu_icon.addEventListener("click",function(){
    menu_space.classList.remove("hide1")
})

menu_close.addEventListener("click",function(){
    menu_space.classList.add("hide1")
})


// xu ly dang nhap
var form = document.querySelector("form")
var gmail = document.querySelector("#gmail")
var password = document.querySelector("#password")
var rs_gmail = document.querySelector("#rs-gmail")
var rs_password = document.querySelector("#rs-password")
var login_close = document.querySelector(".login-close")
var login_space = document.querySelector(".login-space")
var menu_login = document.querySelector(".menu-login")
var rs_form = document.querySelector(".rs-form")
var rs_suggestion = document.querySelector(".rs-suggestion")
var rs_close = document.querySelector(".rs-close")
var register_space = document.querySelector(".register-space")
var suggestion = document.querySelector(".suggestion")
var menu_register= document.querySelector(".menu-register")

login_close.addEventListener("click",function(){
    login_space.classList.add("hide2")
})

menu_register.addEventListener("click",function(){
    register_space.classList.remove("hide2")
    menu_space.classList.add("hide1")
})

menu_login.addEventListener("click",function(){
    login_space.classList.remove("hide2")
    menu_space.classList.add("hide1")
})

suggestion.addEventListener("click",function(){
    login_space.classList.add("hide2")
    register_space.classList.remove("hide2")
})

//ham show loi
function show_error(input,mes){
    let parents = input.parentElement;
    let small = parents.querySelector("small")
  
    small.innerText = mes
}



//ham show success
function show_success(input){
    let parents = input.parentElement;
    let small = parents.querySelector("small")

    small.innerText = " "
}

//ham check thong tin neu NULL
function check_null(list){
    let empty = false;
    list.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            empty = true;
            show_error(input,"Không được để trống !")
        }else{
            show_success(input)
        }
        
    });
    return empty;

}


function check_mail(input){
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let emailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        show_success(input)
    }else{
        show_error(input,"Email phải có đuôi @gmail.com")
    }

    return emailError;
}

//ham check do dai pass
function length_pass(input,min,max){
    input.value = input.value.trim()

    if(input.value.length < min || input.value.length > max){
        show_error(input,`Mật khẩu phải trong khoảng từ ${min}-${max} ký tự`)
        return true
    }
    return false
}



form.addEventListener("submit",function(e){
    e.preventDefault()

    let check_list = check_null([gmail,password])
    let mail_error = check_mail(gmail) 
    let pass_error = length_pass(password,4,20)

    if(mail_error || pass_error || check_list){
        //do not do anything
    }else{
        //call api of call sever
    }
})

rs_close.addEventListener("click",function(){
    register_space.classList.add("hide2")
})

rs_suggestion.addEventListener("click",function(){
    register_space.classList.add("hide2")
    login_space.classList.remove("hide2")
})

rs_form.addEventListener("submit",function(e){
    e.preventDefault()

    
    let mail_error = check_mail(rs_gmail) 
    let pass_error = length_pass(rs_password,4,20)
    let check_list = check_null([rs_gmail,rs_password])

    if(mail_error || pass_error || check_list){
        //do not do anything
    }else{
        //call api of call sever
    }
})

