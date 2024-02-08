import { red } from "@mui/material/colors";
import { AddContainer, Button, ButtonContainer, FormContainer, HeaderAddArtists, QuickAddContainer, RatingContainer } from "./styles";
import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useStore } from "../../store/store";
import { Data, addArtist, deleteArtist } from "../../store/musicReducer";
import React, { ChangeEvent, useState } from "react";
import { Input, Radio, TextField } from "@mui/material";
import { NewArtist } from "../NewArtist";

const arrayMaxRating = new Array(1,2,3,4,5,6,7,8,9,10)

const newArtistFormSchema = zod.object({
    name: zod.string({required_error: "Required",}),
    link: zod.string().regex(new RegExp("(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))"))
})




export function QuickAdd(addRow: any, props: any) {

    const [, dispatch] = useStore();
    const [errorUrl, setErrorUrl] = useState(false);
    const [inputUrl, setInputUrl] = useState('');
    const [inputName, setInputName] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [inputRating, setInputRating] = useState('');
    const [errorRating, setErrorRating] = useState(false);

    const {register, handleSubmit, reset, trigger, clearErrors}= useForm({
        resolver: zodResolver(newArtistFormSchema),
        defaultValues: {
            id: '',
            name: '',
            link: '',
            rating: 0
        }
    })

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputUrl(e.target.value);
        if(errorUrl) {
            setErrorUrl(false)
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputName(e.target.value);
        if(errorName) {
            setErrorName(false)
        }
    }

    const handleRatingChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputRating(e.target.value);
        if(errorRating) {
            setErrorRating(false)
        }
    }
    const handleOnArtistAdd = (data: Data) => {
        dispatch(addArtist((data)));
    };

    const onSubmit = async () => {
        clearErrors()
        const triggerFlag = await trigger();
        if(triggerFlag) {
            setErrorUrl(false)
            let newArtist = {
                id: new Date().getUTCMilliseconds(),
                name: inputName,
                url: inputUrl,
                rating: Number(inputRating)
            }
            handleOnArtistAdd(newArtist);
            setInputName('')
            setInputUrl('')
            setInputRating('')
            setErrorName(false)
            setErrorRating(false)
            setErrorUrl(false)
            reset();
        } else {
            setErrorUrl(true)
        }

    };

    return (
        <QuickAddContainer>
            <HeaderAddArtists>
                <span>
                    Quick Add
                </span>
            </HeaderAddArtists>
            <AddContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    <label htmlFor="name">Artist Name</label>
                    <TextField 
                        type="text" 
                        placeholder="Queen" 
                        {...register('name')}
                        onChange={(e) => handleNameChange(e)}
                        value={inputName}
                        sx={{'& .MuiOutlinedInput-root.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #723172'
                        }}}}
                    />

                    <label htmlFor="name">Favorite music video (Youtube)</label>
                    <TextField
                        {...register('link')}
                        type="text" 
                        placeholder="https://youtube.com/watch?v=..." 
                        error={errorUrl}
                        helperText={errorUrl ? "Invalid URL" : " "}
                        onChange={(e) => handleUrlChange(e)}
                        value={inputUrl}
                        sx={{'& .MuiOutlinedInput-root.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': {
                            border: '1px solid #723172'
                        }}}}
                        />

                    <label htmlFor="rating">Rating</label>
                    <RatingContainer>
                            <div>
                                <Radio 
                                    checked={inputRating === '1'}
                                    id="one" 
                                    value="1" 
                                    style={{accentColor:'#723172'}}
                                    onChange={(e) => handleRatingChange(e)}
                                />
                                <label htmlFor="one">1</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '2'} id="two" value="2" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="two">2</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '3'} id="three" value="3" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="three">3</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '4'} id="four"  value="4" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="four">4</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '5'} id="five" value="5" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="five">5</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '6'} id="six" value="6" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="six">6</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '7'} id="seven" value="7" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="seven">7</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '8'} id="eight" value="7" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="eight">8</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '9'} id="nine" value="9" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="nine">9</label>
                            </div>
                            <div>
                                <Radio checked={inputRating === '10'} id="ten" value="10" style={{accentColor:'#723172'}} onChange={(e) => handleRatingChange(e)}/>
                                <label htmlFor="ten">10</label>
                            </div>
                    </RatingContainer>
                    
                    <ButtonContainer>
                        <Button disabled={!inputName || !inputUrl || !inputRating} type="button" onClick={() => onSubmit()}>Add</Button>
                    </ButtonContainer>
                </FormContainer>


                </form>
            </AddContainer>
        </QuickAddContainer>
    )
}