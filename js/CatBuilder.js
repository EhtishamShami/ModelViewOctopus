
var catDataModel=
{
    currentCat:null
    ,
    "catData":[
        {
            "catName":"Cutie",
             "catImage":"images/Cat1.jpg",
            "catClicks":0
        },
        {
            "catName":"Pie",
            "catImage":"images/Cat2.jpg",
            "catClicks":0
        },
        {
            "catName":"Daroo",
            "catImage":"images/Cat1.jpg",
            "catClicks":0
        },
        {
            "catName":"Sweet",
            "catImage":"images/Cat2.jpg",
            "catClicks":0
        },
        {
            "catName":"Khucho",
            "catImage":"images/Cat2.jpg",
            "catClicks":0
        }
    ]

};



var OctuPus=
{
    
    
    init:function()
    {
        catDataModel.currentCat=catDataModel.catData[0];
        View.init();
      
    },
 
    getAllCatData:function()
    {
        return catDataModel.catData;
    },
    getCurrentCatData:function()
    {
        return catDataModel.currentCat;
    } ,
    setCurrentCat: function(cat){
        catDataModel.currentCat = cat;
    },
    incrementCounter: function(){
        catDataModel.currentCat.catClicks++;
        View.render();
        
    }

};


var View=
{

 
    init:function()
    {

     var elment;

     this.mCatName=$("#catName");
     this.mCatImage=$("#catImage")
     this.mCatClick=$("#catclicks");
  
     this.mCatImage.on('click',function()
     {
         OctuPus.incrementCounter();
         
     })
        var mCatlist=$("#catList");

        OctuPus.getAllCatData().forEach(function(cat) {

            elem = document.createElement('li');
            elem.textContent = cat.catName;

            elem.addEventListener('click',(function(catCopy)
            {

                return function()
                {
                    OctuPus.setCurrentCat(catCopy)
                    View.render();
                }

            })(cat))

            mCatlist.append(elem);
            console.log(cat.catName)
        }, this);

        this.render();



    }
    ,
    render:function()
    {
        this.mCatName.text(OctuPus.getCurrentCatData().catName);
        this.mCatImage.attr("src",OctuPus.getCurrentCatData().catImage);
        this.mCatClick.text(OctuPus.getCurrentCatData().catClicks)
          
    }


};

OctuPus.init();