
import axios from '../utils/Axios'

import { generateApiSignature } from '../utils/Helper';


const apiKey = import.meta.env.VITE_API_KEY ? import.meta.env.VITE_API_KEY : " ";
const apiSecret = import.meta.env.VITE_API_SECRET ? import.meta.env.VITE_API_SECRET : " ";

export class AxiosService{

    async fetchAccessToken(){
        const result = await axios.get(`api/auth/?api_key=${apiKey}`);
        return result;
    }

    async fetchServiceSession(authToken){

        const apiSignature = generateApiSignature(
            apiKey,
            authToken,
            apiSecret,
        );

        const parameters = {
            method: `auth.getSession`,
            api_key: apiKey,
            token: authToken,
            api_sig: apiSignature,
            format: `json`,
        };

        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, {
            params:parameters
        });
        return result;
    }

    async getTrack(){
        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, 
        {params:{
            method:"track.getInfo",
            api_key:apiKey,
            artist:"cher",
            track:"believe",
            format:"json"
        }})
        return result;
    }

    async getTopTags(){
        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, 
        {params:{
            method:"tag.getTopTags",
            api_key:apiKey,
            format:"json"
        }})
        return result.data;
    }

    async getTopAlbumByTag(selectedTagName){
        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, 
        {params:{
            method:"tag.gettopalbums",
            tag:selectedTagName,
            api_key:apiKey,
            format:"json"
        }
        })
        return result;
    }

    async getTopArtistByTag(selectedTagName){
        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, 
        {params:{
            method:"tag.gettopartists",
            tag:selectedTagName,
            api_key:apiKey,
            format:"json"
        }
        })
        return result;
    }

    async getTopTrackByTag(selectedTagName){
        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, 
        {params:{
            method:"tag.gettoptracks",
            tag:selectedTagName,
            api_key:apiKey,
            format:"json"
        }
        })
        return result;
    }

    async getAlbumInfo(albumArtist, infoAlbum){
        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, 
        {params:{
            method:"album.getinfo",
            api_key:apiKey,
            artist:albumArtist,
            album:infoAlbum,
            format:"json"

        }})
        return result.data;
    }

    async getArtistInfo(artistName){
        const result = await axios.get(`http://ws.audioscrobbler.com/2.0/`, 
        {params:{
            method:"artist.getinfo",
            artist:"Linkin Park",
            api_key:apiKey,
            format:"json"
        }})
        return result;
    }
}