import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import { signIn, signOut, useSession } from "next-auth/client";
import router from "next/router";
export default function Index() {
  const [session, loading] = useSession();
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.supportCon}>
        <Header />
        <main className={styles.main}>
          <div className={styles.headings}>
            <div className={styles.mainAdd}>
              <h2 className={styles.headingsTitle}>
                let the money work from you
              </h2>
              <p className={styles.headingsSubTitle}>
                Don’t worry! All investments are secured and safe while you’re
                away
              </p>
              <button className={styles.headingBtn}>GET STARTED</button>
            </div>
          </div>
        </main>
      </div>
      <section className={styles.sectionPhone}>
        <div className={styles.sectionPhoneHeading}>
          <div className={styles.sectionAddPhone}>
            <h2 className={styles.sectionPhoneTitle}>
              The new standard in forex trading
            </h2>
            <p className={styles.sectionPhoneSubTitle}>
              SureFire to get a 360-Degree Turn on how you can capitalize in
              Forex Market.
            </p>
          </div>
        </div>
        <div className={styles.sectionPhoneImage}>
          <Image src='/images/phone.png' height={1000} width={1300} alt='' />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutPic}>
          <Image
            src='/images/team.jpg'
            layout='intrinsic'
            height={900}
            width={1000}
            alt=''
          />
        </div>
        <div className={styles.aboutPara}>
          <div className={styles.addAbout}>
            <h2 className={styles.abouTitle}>Lorem Ipsum</h2>

            <p className={styles.aboutMe}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              nihil amet excepturi illo aut aliquam delectus, quos veniam rerum
              laboriosam optio ipsam nostrum sint voluptatibus aperiam commodi
              labore quaerat, inventore, dolores eius similique ex! Est, numquam
              harum! Ullam quae aliquam, sed optio beatae, rerum assumenda
              libero maiores perferendis non deleniti numquam minus modi odit
              corporis cumque voluptatum nulla harum autem dolorem
              necessitatibus asperiores? Maiores alias, totam quo repellat
              officiis consequuntur culpa doloribus. Laborum ipsam ratione
              possimus, deleniti ullam velit, aperiam, debitis fugiat tenetur
              quod consequatur similique distinctio dolorum quas! Totam eos
              laboriosam assumenda aliquid veniam quam repellat officiis cumque
              odit maiores, quaerat esse quis iusto quas necessitatibus
              blanditiis sed dolorem mollitia illum enim! Illum labore amet
              velit suscipit sequi quos enim ullam expedita nesciunt inventore,
              voluptatum eaque eligendi corrupti dolore recusandae optio modi
              blanditiis, distinctio fugit! Temporibus consequatur pariatur
              sequi facere a, fuga labore ab nesciunt quae cum iusto vel.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.plans}>
        <h2 className={styles.plansTitle}>Our Services</h2>
        <div className={styles.plansContainer}>
          <div className={styles.packageContainer}>
            <div className={styles.packageDetails}>
              <div className={styles.logo}></div>
              <h2 className={styles.packageTitle}>Lorem Ipsum</h2>
              <p className={styles.packageAmount}>$400</p>
              <p className={styles.packagedescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, nesciunt.
              </p>
            </div>
          </div>
          <div className={styles.packageContainer}>
            <div className={styles.packageDetails}>
              <div className={styles.logo}></div>
              <h2 className={styles.packageTitle}>Lorem Ipsum</h2>
              <p className={styles.packageAmount}>$2,000</p>
              <p className={styles.packagedescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                natus.
              </p>
            </div>
          </div>
          <div className={styles.packageContainer}>
            <div className={styles.packageDetails}>
              <div className={styles.logo}></div>
              <h2 className={styles.packageTitle}>Lorem Ipsum</h2>
              <p className={styles.packageAmount}>$5,000</p>
              <p className={styles.packagedescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, at.
              </p>
            </div>
          </div>
          <div className={styles.packageContainer}>
            <div className={styles.packageDetails}>
              <div className={styles.logo}></div>
              <h2 className={styles.packageTitle}>Lorem ipsum</h2>
              <p className={styles.packageAmount}>$10,000</p>
              <p className={styles.packagedescription}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quidem, excepturi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.open}>
        <div className={styles.openContainer}>
          <div className={styles.steps}>
            <h2 className={styles.stepsTitles}>
              Open an Account In Just 5mins
            </h2>
            <div className={styles.guideSteps}>
              <div className={styles.stepg1}>
                <h2 className={styles.stepTitle}>Refer-a-Friend</h2>
                <p className={styles.stepPara}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore dolorum magnam commodi officiis fugit inventore ipsam
                  consequuntur atque impedit.
                </p>
              </div>
              <div className={styles.stepg1}>
                <h2 className={styles.stepTitle}>Create an Account</h2>
                <p className={styles.stepPara}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, recusandae.
                </p>
              </div>
              <div className={styles.stepg1}>
                <h2 className={styles.stepTitle}>Deposit</h2>
                <p className={styles.stepPara}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iure, sapiente.
                </p>
              </div>
              <div className={styles.stepg1}>
                <h2 className={styles.stepTitle}>Withdraw</h2>
                <p className={styles.stepPara}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  deserunt?
                </p>
              </div>
            </div>
          </div>
          <div className={styles.laptopImage}>
            <Image src='/images/laptop.png' height={600} width={800} alt='' />
          </div>
        </div>
      </section>
    </div>
  );
}
