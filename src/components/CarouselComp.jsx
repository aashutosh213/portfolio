import React, { Component, useState } from 'react';
import { data } from '../Data/Data';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }


  componentDidMount(){
    setInterval(() => {
      if(this.state.paused === false){
        let newSlide = this.state.currentSlide === data.length - 1 ? 0 : this.state.currentSlide + 1
        this.setState({currentSlide: newSlide})
      }
    }, 5000)
  }
  

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === data.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };
  
  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? data.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  render() {

    // const data = [
    //   {
    //   title: "This is the first title",
    //   content: "This is the first content",
    //   },
    //   {
    //   title: "This is the second title",
    //   content: "This is the second content",
    //   },
    //   {
    //   title: "This is the third title",
    //   content: "This is the third content",
    //   },
  
    // ];
    return(
      <div className="h-max mt-10 py-3 w-3/5 flex relative justify-center bg-white rounded-xl drop-shadow-xl text-[#383d41]" onMouseEnter={() => {this.setState({paused: true})}} onMouseLeave={() => {this.setState({paused: false})}}>
        <div className=" flex justify-center">
          {data.map((item, index) => {
            return (
             <div
                key={index}
                className={
                  index === this.state.currentSlide
                    ? "block w-full h-auto object-cover"
                    : "hidden"
                }
              >
                
                <h5 className='flex text-3xl font-bold py-8 px-10  items-center' >{item.title}<p key={index} className='px-2'>{item.svg}</p></h5>
                <p className='flex text-base font-medium text-black-400 px-10 text-justify pb-5'>{item.content}</p>
              </div>
            );
          })}
        </div>
        <AiOutlineLeft onClick={this.prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-[#35b2cc] cursor-pointer' />

        <AiOutlineRight onClick={this.nextSlide} className='absolute right-0 text-3xl inset-y-1/2 text-[#35b2cc] cursor-pointer' />
      </div>
    );
  }
};

export default CarouselComp;
