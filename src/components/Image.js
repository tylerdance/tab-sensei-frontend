import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';




const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



class Image extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageUrl: null,
            imageAlt: null,
            redirect: false,
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
        formData.append('upload_preset', 'ml_default')
        const options = {
          method: 'POST',
          body: formData,
        };
        
        // replace cloudname with your Cloudinary cloud_name
        return fetch('https://api.Cloudinary.com/v1_1/dok4pz3i3/image/upload', options)
          .then(res => res.json())
          .then(res => {
              const link = res.url;
              console.log(link)
              //.catch(err => console.log(err));


            //   axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, link)
            //   .then(response => {
            //       console.log(response);
            //       this.setState({redirect: true});
            //   })
            //   .catch(error => {
            //       console.log(error);
            //   })

            })
          
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