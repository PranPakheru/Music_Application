
import axios from '../utils/Axios'

import { generateApiSignature } from '../utils/Helper';


const apiKey = 'add8e5c145e6ed2ade78942919ee5b7b';
const apiSecret = 'b5ca7751831781eebcafbd598ded5e82';
const redirectUri = 'http://localhost:5173/combinedPage';
// const scopes = 'music_read';


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
        // console.log(apiSignature);

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