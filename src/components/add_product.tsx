import React, { useState } from 'react'
import "../sass/add_product.scss"
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { BiPlus } from 'react-icons/bi';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';



import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { useShowAddProductUpdate, useShowAddProduct } from '../context/showAddProductContext';

function AddProduct() {
    const [image, setImage] = useState<any>(null)
    const saveProduct = (e:any) => {
        e.preventDefault()

        if(image !== null){

            const photoRef = ref(storage, image.name)
            uploadBytes(photoRef, image)
            // .then((snapShot:any)=>{
                // console.log(snapShot);
                
            // }).catch((err:any)=>{
                // console.log(err);
                
            // })
        }

    }
    const updateShowAddProduct = useShowAddProductUpdate()
    const showAddProduct = useShowAddProduct()
    const [imageSrc, setImageSrc] = useState("")

    

    const imageHandler = (e: any) => {
        setImageSrc("")
        const file = e.target.files[0]
        if (!file) return
        setImage(file)

        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImageSrc(reader.result as string)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }


    return (
        <div className={`${showAddProduct ? "add_product" : "hide"}`}>
            <div className="add_product_body">
                <IoMdClose className="add_product_close" onClick={() => updateShowAddProduct(false)} />

                <div className="image_preview">
                    <img src={imageSrc} alt="Image Preview" className={` ${imageSrc === "" ? "hide" : "image_preview_img"}`} />

                    
                    <MdDelete onClick={() => setImageSrc("")} className={`image_preview_errase ${imageSrc === "" ? "hide" : ""}`} />

                    <label htmlFor="input_type_image" className={` ${imageSrc === "" ? "image_preview_placeholder" : "hide"}`} >
                        <MdOutlineAddPhotoAlternate />
                        Upload Photo
                    </label>
                </div>

                <div className="add_product_header">
                    <h2>Add Product</h2>

                </div>
                <form className="add_product_form" onSubmit={saveProduct}>
                    <input id="input_type_image" name="input_type_image" type="file" accept="image/*" onChange={imageHandler} />


                    <div className="inputBox inputText">
                        <label htmlFor="new_product_name">Name:</label>
                        <input autoComplete="off" type="text" name="new_product_name" id="new_product_name" />
                    </div>
                    <div className="inputBox inputText">
                        <label className="labelTextarea" htmlFor="new_product_description">Description:</label>
                        <textarea autoComplete="off" name="new_product_description" id="new_product_description" ></ textarea>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="new_product_invested">Invested Money:</label>
                        <span>

                            <input autoComplete="off" type="number" name="new_product_invested" id="new_product_invested" />
                        $
                        </span>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="new_product_salePrice">Sale Price:</label>
                        <span>
                            <input autoComplete="off" type="number" name="new_product_salePrice" id="new_product_salePrice" />
                            $</span>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="new_product_discount">Discount:</label>
                        <span>
                            <input autoComplete="off" type="number" name="new_product_discount" id="new_product_discount" />
                            %</span>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="new_product_stockQuantity">Stock Quantity:</label>
                        <input autoComplete="off" type="number" name="new_product_stockQuantity" id="new_product_stockQuantity" />
                    </div>

                    <div className="buttons">

                        <button id="submit" type="submit">Save</button>
                        <button className="resetButton" id="resetButton" type="reset">Clear</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddProduct
