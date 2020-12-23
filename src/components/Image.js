import React, { Component } from 'react'
import Axios from 'axios'
//import cloudinary from 'cloudinary'
//import {multer, uploads} from 'multer'



const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



class Image extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageUrl: null,
            imageAlt: null,
         }
    }
//     const [image, setImage] = useState('')

//     function handleClick(e) {
//         const andrew = 'andrew@gmail.com'
        
    
//         async function getImage() {
//         let url =`${REACT_APP_SERVER_URL}/api/image/upload/${andrew}`
//          Axios.post(url, uploads.single('inputFile'), (req, res) => {
//             if (req.file){
//                 let file = req.file.path;
//                 cloudinary.uploader.upload(file,(result) =>{
//                   console.log(file)
//                    console.log(result);
//          }).then( 
//             async (res) =>{ 
//                 if(res !== undefined){ 
//                      await setImage(res.data.user)   
//             }
            
//         }).catch(err=>{console.log(err)})
//     }
        
// })
    handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        // replace this with your upload preset name
        formData.append('ml_default', 'qv5rfbwg');
        const options = {
          method: 'POST',
          body: formData,
        };
        
        // replace cloudname with your Cloudinary cloud_name
        return fetch('https://api.Cloudinary.com/v1_1/dok4pz3i3/image/upload', options)
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log(err));
  }


    render() { 
        const { imageUrl, imageAlt } = this.state;

        

        return ( 
            <div>
                <section className="left-side">
                    <form>
                        <div className="form-group">
                            <input type="file"/>
                        </div>
                        <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
                        <button type="button" className="btn widget-btn">Upload Via Widget</button>
                    </form>
                </section>
                <section className="right-side">
                    <p>The resulting image will be displayed here</p>
                    {imageUrl && (
                    <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
                    )}
                </section>
            </div>
         );
    }
}
 
export default Image;
