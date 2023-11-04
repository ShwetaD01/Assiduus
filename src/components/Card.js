import React from 'react'

const Card = ({name, graph, menu}) => {
  return (
    <div className="flex-col justify-between">
        <div className="bg-white border-red-600 m-5 w-[600px] h-[320px] flex-col " > 
<div  className='bg-white shadow-md p-4'>
 <h2>{name}</h2>
 <div className='flex justify-end mr-3'>

{/* <ButtonGroup
onClick={randomData}
disableElevation
// style={{border: "4px solid green", width: "160px", height: "30px"}}

// variant="contained"
// aria-label="Disabled elevation buttons"
>
<Button>Manage</Button>
<Button>January</Button>
</ButtonGroup> */}
{menu}

</div>


</div>
    <div>

    {graph}
    </div>
     
    </div>
    </div>
    
  )
}

export default Card
