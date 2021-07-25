export function numberWithCommas(x=null) 
{
    if(x != null)
    {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    else
    {
      return "";
    }
}


export const formatDate = function(dateEntry)
{
  let datetoFormat = new Date(dateEntry);

  let date=datetoFormat.getDate() + "/"+ parseInt(datetoFormat.getMonth()+1) +"/"+datetoFormat.getFullYear();

  return date
}

export const fetchAysnc = async (api) => {
  const res = await fetch(api,{
    method:"GET",
  })

  const data = await res.json()
  return data
}

export const postAysnc = async (api,dataEntry) => {
  const res = await fetch(api,{
    method:"POST",
    headers : { 'Content-type' : 'application/json'},
    body: JSON.stringify(dataEntry) 
  })

  const data = await res.json()
  return data
}