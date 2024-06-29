import React from 'react'

function CartComponent(){
    let urlArray = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOveSZIJqOYA-KfayCUZx54yrFVfPSAQEorQ&s",
      "https://i.pinimg.com/736x/be/19/13/be1913dd97bb1970a63a2452bbd95ae9.jpg",
      "https://ih1.redbubble.net/image.2419420177.4365/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      "https://images.news9live.com/wp-content/uploads/2024/01/1-200.jpg",
      "https://m.media-amazon.com/images/I/81cekv1b3fL._AC_UF1000,1000_QL80_.jpg",
      "https://e0.pxfuel.com/wallpapers/493/309/desktop-wallpaper-krishna-murli-govind-radha-god.jpg"]


    let imageArray = urlArray.map((imageUrl, index) => <div key={index}>

        <div>
            <a href="#"><div>
                <img className='imageSize' src={imageUrl}/>
                </div></a>
        </div>
        <div>
            <p>Whenever you want just call me is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the   </p>
            <div><button>View</button></div>
        </div>
    </div>)

    return (
        <div>
            {imageArray}
        </div>
    )
}

export default CartComponent
