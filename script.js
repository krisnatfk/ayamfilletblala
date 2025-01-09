
    function addToCart() {
        alert("Product successfully added to the cart!");
    }


    function toggleHeart(element) {
        element.classList.toggle("bx-heart-filled");
    }




    
    function showAlert() {
        alert("Selamat datang di toko kami!");
    }



    function validateForm() {

        let isValid = true;
        document.getElementById('nameError').style.display = 'none';
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('messageError').style.display = 'none';
        
 
        const name = document.getElementById('name').value.trim();
        if (name === "") {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

   
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

   
        const message = document.getElementById('message').value.trim();
        if (message === "") {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        return isValid;
    }