import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import classes from './App.module.css'
import './fonts/fonts.css'
import Cogs from './components/Cogs'
import myself from './images/20200603_152906.jpg'

function App() {
  const [clickOnLink01, setClickOnLink01] = useState(false)
  const [clickOnLink02, setClickOnLink02] = useState(false)

  const clickOnLink01Handler = () => {
    setClickOnLink01(true)
    setClickOnLink02(false)
  }
  const closeLink01Handler = () => {
    setClickOnLink01(false)
  }

  const clickOnLink02Handler = () => {
    setClickOnLink02(true)
    setClickOnLink01(false)
  }
  const closeLink02Handler = () => {
    setClickOnLink02(false)
  }

  return (
    <div className={classes.App}>
      <nav>
        <div className={classes.navLink} onClick={clickOnLink01Handler}>
          WHO
          {!clickOnLink01 && <span></span>}
          <CSSTransition
            in={clickOnLink01}
            timeout={500}
            classNames={{
              exitActive: classes['underline-exit-active'],
            }}
            unmountOnExit
          >
            <div className={classes.underline}></div>
          </CSSTransition>
        </div>
        <div className={classes.navLink} onClick={clickOnLink02Handler}>
          ABOUT
          {!clickOnLink02 && <span></span>}
          <CSSTransition
            in={clickOnLink02}
            timeout={500}
            classNames={{
              exitActive: classes['underline-exit-active'],
            }}
            unmountOnExit
          >
            <div className={classes.underline}></div>
          </CSSTransition>
        </div>
        <div className={classes.navLink}>
          THIRD LINK <span></span>
        </div>
        <div className={classes.navLink}>
          FOURTH LINK <span></span>
        </div>
        <div className={classes.navLink}>
          AND SO ON <span></span>
        </div>
      </nav>
      <main>
        {!clickOnLink01 && !clickOnLink02 && <Cogs />}
        {clickOnLink01 && (
          <div className={classes.contentBox}>
            <div className={classes.photoBox}>
              <img
                className={classes.photo}
                src={myself}
                alt='Andrejus Chomičenka'
              />
            </div>
            CONTENT GOES HERE... Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tenetur delectus illo doloremque repudiandae
            eligendi nam aliquam, nemo facilis commodi ipsam tempore, explicabo
            perspiciatis esse atque culpa assumenda numquam! Dolorum, illum?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            exercitationem suscipit odit provident assumenda aut repudiandae
            reprehenderit! Asperiores cumque ratione fugit? Dignissimos
            repudiandae iure esse rem, et recusandae ea sint!
            <button onClick={closeLink01Handler}>close</button>
          </div>
        )}
        {clickOnLink02 && (
          <div className={classes.contentBox}>
            ANOTHER CONTENT GOES THERE... Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Tenetur delectus illo doloremque
            repudiandae eligendi nam aliquam, nemo facilis commodi ipsam
            tempore, explicabo perspiciatis esse atque culpa assumenda numquam!
            Dolorum, illum?
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus quidem similique aliquid minus enim repudiandae, vel
            quaerat optio aut quae est accusantium doloribus vitae.
            Exercitationem facere vel non consequatur.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus quidem similique aliquid minus enim repudiandae, vel
            quaerat optio aut quae est accusantium doloribus vitae.
            Exercitationem facere vel non consequatur.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus quidem similique aliquid minus enim repudiandae, vel
            quaerat optio aut quae est accusantium doloribus vitae.
            Exercitationem facere vel non consequatur.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus quidem similique aliquid minus enim repudiandae, vel
            quaerat optio aut quae est accusantium doloribus vitae.
            Exercitationem facere vel non consequatur.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus quidem similique aliquid minus enim repudiandae, vel
            quaerat optio aut quae est accusantium doloribus vitae.
            Exercitationem facere vel non consequatur.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus quidem similique aliquid minus enim repudiandae, vel
            quaerat optio aut quae est accusantium doloribus vitae.
            Exercitationem facere vel non consequatur.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus quidem similique aliquid minus enim repudiandae, vel
            quaerat optio aut quae est accusantium doloribus vitae.
            Exercitationem facere vel non consequatur.
            <button onClick={closeLink02Handler}>close</button>
          </div>
        )}
        <CSSTransition
          in={clickOnLink01}
          timeout={700}
          classNames={{
            enter: classes['boderlineTopLeftLink02-enter'],
            enterActive: classes['boderlineTopLeftLink02-enter-active'],
            enterDone: classes['boderlineTopLeftLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink02}
          timeout={700}
          classNames={{
            enter: classes['boderlineTopLeftLink02-enter'],
            enterActive: classes['boderlineTopLeftLink02-enter-active'],
            enterDone: classes['boderlineTopLeftLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink01}
          timeout={700}
          classNames={{
            enter: classes['boderlineBottomLeftLink02-enter'],
            enterActive: classes['boderlineBottomLeftLink02-enter-active'],
            enterDone: classes['boderlineBottomLeftLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink02}
          timeout={700}
          classNames={{
            enter: classes['boderlineBottomLeftLink02-enter'],
            enterActive: classes['boderlineBottomLeftLink02-enter-active'],
            enterDone: classes['boderlineBottomLeftLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink01}
          timeout={2300}
          classNames={{
            enter: classes['boderlineMiddle-enter'],
            enterActive: classes['boderlineMiddle-enter-active'],
            enterDone: classes['boderlineMiddle-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink02}
          timeout={2300}
          classNames={{
            enter: classes['boderlineMiddle-enter'],
            enterActive: classes['boderlineMiddle-enter-active'],
            enterDone: classes['boderlineMiddle-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink01}
          timeout={3000}
          classNames={{
            enter: classes['boderlineTopRightLink02-enter'],
            enterActive: classes['boderlineTopRightLink02-enter-active'],
            enterDone: classes['boderlineTopRightLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink02}
          timeout={3000}
          classNames={{
            enter: classes['boderlineTopRightLink02-enter'],
            enterActive: classes['boderlineTopRightLink02-enter-active'],
            enterDone: classes['boderlineTopRightLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink01}
          timeout={3000}
          classNames={{
            enter: classes['boderlineBottomRightLink02-enter'],
            enterActive: classes['boderlineBottomRightLink02-enter-active'],
            enterDone: classes['boderlineBottomRightLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
        <CSSTransition
          in={clickOnLink02}
          timeout={3000}
          classNames={{
            enter: classes['boderlineBottomRightLink02-enter'],
            enterActive: classes['boderlineBottomRightLink02-enter-active'],
            enterDone: classes['boderlineBottomRightLink02-enter-done'],
          }}
          unmountOnExit
        >
          <div></div>
        </CSSTransition>
      </main>
    </div>
  )
}

export default App
