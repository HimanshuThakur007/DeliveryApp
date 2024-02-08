import { useAuthContext } from "../components/common/AuthContext";

function useFetch() {
    const { url, port, state, actions } = useAuthContext();
    var myUrl = url
    const decData = state.decryptedData;
    console.log('decData',decData)
  var { Token } = decData;

    const ServerRequest = async (req) => {

       
        let response = await fetch(req)
        let data = await response.json()

        return { response, data }
    }

   
    let callFetch = async (url, label, body) => {
    //    let ip = url
    // let ip = localStorage.getItem("Url");
    // let port = localStorage.getItem("Port");
        let baseURL = `${myUrl}:${port}`;
  
        // const userData = sessionStorage.getItem('userData')
        // const token = JSON.parse(userData).Token;
        const urlStr = baseURL + url
        var req;
        let h = new Headers();
        h.append('Content-Type', 'application/json');
        // h.append('CompCode', 'ESEVENTDB');
        // h.append("Content-Type", "application/json");
        // h.append('FYear', '0');
        h.append('Authorization', `Bearer ${Token}`)
        if (label === 'POST') {
            req = new Request(urlStr, {
                method: 'POST',
                headers: h,
                body: JSON.stringify(body),
                mode: 'cors'
            });

        } else {
            req = new Request(urlStr, {
                method: 'GET',
                headers: h,
                mode: 'cors',

            });


        } 

        let { response, data } = await ServerRequest(req)
        return { res: response, got: data }
    }
    

    return callFetch
}

export default useFetch;

