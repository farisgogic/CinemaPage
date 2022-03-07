$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
);

$("#forma").validate({
    rules:{
        korisnicko:{
            required:true,
            regex:/^[a-zA-Z]{4,}$/
        },
        lozinka:{
            required:true,
            regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        },
        email:{
            required: true,
            regex:/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        }
    },
    messages:{
        korisnicko:{
            required:"Ovo polje je obavezno",
            regex:"Morate unijeti minimalno 4 slova"
        },
        lozinka:{
            required:"Ovo polje je obavezno",
            regex:"Minimalno 8 karaktera, najmanje 1 slovo i 1 broj"
        },
        email:{
            required:"Ovo polje je obavezno",
            regex:"Unesite ispravan email"
        }
    }
    
});