var catData=
{
  currentCat:null,
"cat":
[
{
 name:'Cutie',
 picture:'images/pic.jpg',
 clicks:0
},{

  name:'Sweet',
  picture:'images/pic1.jpg',
  clicks:0
 

},{

  name:'Awesome',
  picture:'images/pic2.jpg'  ,
  clicks:0
 
},  
  {
    name:'Jesus',
    picture:'images/pic3.jpg',
    clicks:0
   
  },
  {
      name:'Cool',
      picture:'images/pic.jpg',
      clicks:0
     
  }
]

};



var octopus=
{
  "isVisible":"false"
  ,
  init:function()
  {

    catData.currentCat=catData.cat[0];

    catView.init();
    listView.init();
    adminView.init();
  },
  getCurrentCat:function()
  {

    return catData.currentCat;

  },
  setCurrentCat:function(cat)
  {
      catData.currentCat=cat;
  },
  getCats:function()
  {
    return catData.cat;
  }
  ,
  incrementCatCounter:function()
  {
    catData.currentCat.clicks++;
    catView.render();
  },
  showHide:function()
  {

    if(octopus.isVisible)
    {
      adminView.inputFieldForm.style.visibility='hidden'
      
      octopus.isVisible=false
    }
    else
    {
      adminView.inputFieldForm.style.visibility='visible'
      
      octopus.isVisible=true
    }
   


  }


};


/*
Views are mentioned below
*/




var catView=
{

init:function()
{
this.catElem= $("#catName");
this.catPictureElem=$("#catPicture");
this.catCountElem=$("#numbersTV");


this.catPictureElem.on('click',function()
{
  octopus.incrementCatCounter();
});

catView.render();
}
,
render:function()
{


  var currentCat=octopus.getCurrentCat();

  this.catElem.text(currentCat.name);
  this.catPictureElem.attr('src',currentCat.picture);
  this.catCountElem.text(currentCat.clicks);
}

};


var listView=
{
  init:function()
  {
    this.catList=$("#catList");

    listView.render();

  }
  ,
  render:function()
  {
    var cats,elem;

    cats=octopus.getCats();

    this.catList.innerHTML = '';

    cats.forEach(function(cat) {

      elem=document.createElement('li')
      elem.textContent=cat.name

      elem.addEventListener('click',(function(catCopy)
      {

          return function()
          {
              octopus.setCurrentCat(catCopy);
              catView.render();
              adminView.render();
          }

      })(cat))
      this.catList.append(elem);
    }, this);
  }

};



var adminView=
{

  init:function()
  {
    var AdminPanelBtn=$("#adminButton");



    this.inputFieldForm=document.getElementById("infoEditor");

    this.catNameIp=document.getElementById("catNameIP");
    this.catImageIp=document.getElementById("catImageIP");

    var saveIP=$("#saveButton");
    var discardIP=$("#discardButton");

    
    AdminPanelBtn.on('click',function()
    {    
      octopus.showHide();
    });

    saveIP.on('click',function()
    {
      var catData=octopus.getCurrentCat();
      catData.name=adminView.catNameIp.value;
      catData.picture=adminView.catImageIp.value;

      listView.render();
      View.render();
      octopus.showHide();

    });

    discardIP.on('click',function()
    {
      octopus.showHide();
    });
    
   
    adminView.render();
    octopus.showHide();
    
  }
  ,
  render:function()
  {
    var cat=octopus.getCurrentCat();
    this.catNameIp.value=cat.name;
    this.catImageIp.value=cat.picture;

  }





};


octopus.init();



// function SetValues()
// {
 
//     var catsArray=catData.cat;
  
//     for(var i=0;i<catsArray.length;i++)
//     {
//       var currentCat=catsArray[i];
//       var currentLI=HTMLcatListItem.replace("%data%",currentCat.name);
//       $("#catList").append(currentLI);
  
//     }
  
// }


// $(document).on("click", "#catList li", function(){
//   console.log("index is:" ,  $(this).index() );
//   $("#catName").text(catData.cat[$(this).index()].name);
//   position=$(this).index()
//   $("#catPicture").attr("src", catData.cat[$(this).index()].picture);
//   $("#numbersTV").text(catData.cat[$(this).index()].clicks);
  
// })

// var position=0;


// $('#cat1').click(function(e) {
//     //the element has been clicked... do stuff here
//     console.log("Number is "+position)

//     catData.cat[position].clicks=catData.cat[position].clicks+1;

//     $("#numbersTV").text(catData.cat[position].clicks);

//   });

