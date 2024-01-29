AFRAME.registerComponent("comic-poster",{
    init:function(){
        this.posterContainer = this.el
        this.poster_load()
    },
    poster_load:function(){
        const poster_data = [
         {
            id:"captain-aero",
            url:"./assets/assets/posters/captain-aero-poster.jpg"
         },
         {
            id:"outer-space",
            url:"./assets/assets/posters/outer-space-poster.jpg"
         },
         {
            id:"spider-man",
            url:"./assets/assets/posters/spiderman-poster.jpg"
         },
         {
            id:"super-man",
            url:"./assets/assets/posters/superman-poster.jpg"
         },
        ]
        var x_pos = -65

        for(var i of poster_data){
            const pos_x = x_pos+25;
            const pos_y = 10
            const pos_z = -40
            const position = {x:pos_x,y:pos_y,z:pos_z}
            x_pos = pos_x
            const border = this.createBorder(position,i.id)
            const poster = this.createPoster(i)
            border.appendChild(poster)
            this.posterContainer.appendChild(border)
        }
    },
    createBorder:function(position,id){
        const entity = document.createElement("a-entity")
        entity.setAttribute("id",id)
        entity.setAttribute("visible",true)
        entity.setAttribute("position",position)
        entity.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:40, 
        })
        entity.setAttribute("material",{
            color:"white",
        })
        return entity
    },
    createPoster:function(item){
        const entity = document.createElement("a-entity")
        entity.setAttribute("visible",true)
        entity.setAttribute("position",{x:0,y:0,z:0.1})
        entity.setAttribute("geometry",{
            primitive:"plane",
            width:18,
            height:30, 
        })
        entity.setAttribute("material",{
            src:item.url,
        })
        return entity
    }
})