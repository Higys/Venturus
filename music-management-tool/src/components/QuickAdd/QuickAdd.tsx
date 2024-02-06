import { red } from "@mui/material/colors";
import { AddContainer, Button, ButtonContainer, FormContainer, HeaderAddArtists, QuickAddContainer, RatingContainer } from "./styles";
import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useStore } from "../../store/store";
import { Data, addArtist, deleteArtist } from "../../store/musicReducer";
import React from "react";

const arrayMaxRating = new Array(1,2,3,4,5,6,7,8,9,10)

const newArtistFormSchema = zod.object({
    name: zod.string().min(1,'Name is required'),
    link: zod.string().min(1,'Link is required'),
})




export function QuickAdd(addRow: any, props: any) {

    const [, dispatch] = useStore();

    const {register, handleSubmit, watch, reset }= useForm({
        resolver: zodResolver(newArtistFormSchema),
        defaultValues: {
            id: '',
            name: '',
            link: '',
            rating: 0
        }
    })

    const handleOnArtistAdd = (data: Data) => {
        dispatch(addArtist((data)));
    };

    const onSubmit = (data: any) => {
        data.id = new Date().getUTCMilliseconds();
        data.rating = rating;
        handleOnArtistAdd(data);
        reset();
    };

    const name = watch('name');
    const link = watch('link');
    const rating = watch('rating');

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
                    <input type="text" placeholder="Queen" {...register('name')}/>

                    <label htmlFor="name">Favorite music video (Youtube)</label>
                    <input type="text" placeholder="https://youtube.com/watch?v=..." {...register('link')}/>

                    <label htmlFor="rating">Rating</label>
                    <RatingContainer>
                            <div>
                                <input id="one" type="radio" value="1" {...register("rating", {valueAsNumber: true})} style={{accentColor:'#723172'}}/>
                                <label htmlFor="one">1</label>
                            </div>
                            <div>
                                <input id="two" type="radio" value="2" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="two">2</label>
                            </div>
                            <div>
                                <input id="three"type="radio" value="3" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="three">3</label>
                            </div>
                            <div>
                                <input id="four"  type="radio" value="4" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="four">4</label>
                            </div>
                            <div>
                                <input id="five" type="radio" value="5" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="five">5</label>
                            </div>
                            <div>
                                <input id="six" type="radio" value="6" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="six">6</label>
                            </div>
                            <div>
                                <input id="seven" type="radio" value="7" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="seven">7</label>
                            </div>
                            <div>
                                <input id="eight" type="radio" value="7" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="eight">8</label>
                            </div>
                            <div>
                                <input id="nine" type="radio" value="9" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="nine">9</label>
                            </div>
                            <div>
                                <input id="ten" type="radio" value="10" {...register("rating")} style={{accentColor:'#723172'}}/>
                                <label htmlFor="ten">10</label>
                            </div>
                    </RatingContainer>
                    
                    <ButtonContainer>
                        <Button disabled={!name || !link || !rating} type="submit">Add</Button>
                    </ButtonContainer>
                </FormContainer>


                </form>
            </AddContainer>
        </QuickAddContainer>
    )
}