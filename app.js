var store = new Vue ({
    el: "#store",
    data:{
        cart: 0,
        availability: "",
        popupstorage: {},
        popup: false,
        adding: false,
        newName: "",
        newPrice: "",
        newType: "",
        newBrand: "",
        instruments: [
            {
                id: 0,
                name: "Drums Xtreme",
                type: "drums",
                price: "$69.69",
                brand: "Fender",
                img: "https://images.equipboard.com/uploads/item/image/36251/fender-starcaster-drum-kit-xl.jpg?v=1519392344",
                hidden: false,
                details: false
            },
            {
                id: 1,
                name: "Guitar Xtreme",
                type: "guitar",
                price: "$66.66",
                brand: "Fender",
                img: "https://sc1.musik-produktiv.com/pic-010107419xxl/fender-custom-shop-masterbuilt-59-stratocaster.jpg",
                hidden: false,
                details: false
            },
            {
                id: 2,
                name: "Mbira",
                type: "African",
                price: "$15.99 ",
                brand: "Yamaha",
                img: "https://i5.walmartimages.com/asr/627063f1-807f-40dd-b0b3-00150406bab0_1.56f3d78e385050a3b9796f4139938387.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
                hidden: false,
                details: false
            },
            {
                id: 3,
                name: "Motorcycle Drums",
                type: "drums",
                price: "$420",
                brand: "Yamaha",
                img: "https://2.bp.blogspot.com/-icUg4dsMPKA/Tc3PlDYytGI/AAAAAAAABvY/Tv_RL4f66eU/s1600/yamaha-tour-custom-in-natural-wood.jpg",
                hidden: false,
                details: false
            },
            {
                id: 4,
                name: "Motorcycle Guitar",
                type: "guitar",
                price: "$420.69",
                brand: "Maton",
                img: "https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/7_Body_Left_Front_NA-9b770965682f9134f2f1b6947b4cc7af.jpg",
                hidden: false,
                details: false
            },
            {
                id: 5,
                name: "Marimba",
                type: "African",
                price: "69.42",
                brand: "Maton",
                img: "https://d1aeri3ty3izns.cloudfront.net/media/25/254491/1200/preview.jpg",
                hidden: false,
                details: false
            }
        ]
    },
    methods:{
        addNew: function(){

        },
        addCart: function(idx){
            this.cart += 1;
            this.instruments[idx].hidden = true;
            if(this.cart === this.instruments.length){
                this.availability = "Store Empty!"
            }else if(this.popup){
                this.popup = false
                for(var i=0;i<this.instruments.length; i++){
                    if(this.instruments[i].id === idx){
                        this.instruments[i].hidden = true;
                        this.instruments[i].details = false;
                    }else{
                        this.instruments[i].hidden = false;
                        this.instruments[i].details = false;
                    }

                }
            }

        },
        emptyCart: function(){
            for(var i=0;i<this.instruments.length; i++){
                if(this.instruments[i].hidden === true){
                    this.instruments[i].hidden = false;
                }
            }
            this.cart = 0
            this.availability = ""
        },
        popUp: function(idx){
            if(this.popup === false){
                this.popup = true;
                for(var i=0; i<this.instruments.length; i++){
                    if(this.instruments[i].id === idx){
                        this.instruments[i].hidden = false;
                        this.instruments[i].details = true;
                    }else{
                        this.instruments[i].hidden = true
                    }
                }

            }else{
                this.popup = false
                for(var i=0;i<this.instruments.length; i++){
                    this.instruments[i].hidden = false;
                    this.instruments[i].details = false;

                }
            }
        },
        addNew: function(){
            this.adding = true;
            for(var i=0; i<this.instruments.length; i++){
                this.instruments[i].hidden = true;
            }
        },
        submit: function(){
            this.instruments.push({id: this.instruments.length, name: this.newName, type: this.newType, price: this.newPrice, brand: this.newBrand, img: "", hidden: false, details: false});
            this.adding = false;
            for(var i=0; i<this.instruments.length; i++){
                this.instruments[i].hidden = false;
            }
        },
        cancel: function(){
            this.adding = false;
            for(var i=0; i<this.instruments.length; i++){
                this.instruments[i].hidden = false;
            }
        }

    }

})