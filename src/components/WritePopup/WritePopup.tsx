// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Popup from "reactjs-popup";
import { useObject } from "react-firebase-hooks/database";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
function WritePopup({ content, title, date, memoUid }) {
  const db = getDatabase();
  const auth = getAuth();
  const userUid = auth.currentUser?.uid;
  const bottleRef = ref(db, `${userUid}/`);
  const [snapshot, loading, error] = useObject(bottleRef);
  let dataArr: any[] = [];
  const setBottleList = (data: any) => {
    dataArr.push(data);
  };
  if (snapshot) {
    console.log("snapshot.val(): ", snapshot.val());
    const data = snapshot.val();
    if (data !== null) {
      for (const [key, value] of Object.entries(data)) {
        setBottleList({ [key]: value });
      }
    }
  }

  dataArr.map((item: object, index: any) => {
    // console.log("Select BOttle");
    // console.log(item);
  });
  const [bottleName, setBottleName] = useState("");
  const onClickRadioButton = (e: MouseEvent, uid: string) => {
    const {
      target: { value },
    } = e;
    setBottleName(value);
    console.log("value : ", value);
    const db = getDatabase();
    const userUid = auth.currentUser?.uid;
    set(ref(db, `${userUid}/${uid}/${memoUid}`), {
      memo: {
        memoColor: "blue",
        title: title,
        contents: content,
        picture: "picture.jpg",
        writtenDate: date,
        isOpened: false,
      },
    });
  };

  // useEffect(() => {
  //   console.log("123", bottleName);
  // }, [bottleName]);

  if (dataArr.length) {
    return (
      <Popup trigger={<BtnContainer>병에 담기</BtnContainer>} modal nested>
        {(close: any) => (
          <ModalPopupContainer>
            <TitleBox>
              <CancelBtn onClick={close} />
              <h1>메모를 담을 보틀을 골라주세요!</h1>
            </TitleBox>
            <ModalPage>
              <TagInputBox>
                {dataArr.map((item: any, index: any) => (
                  <Item key={index}>
                    <RadioButton
                      type="radio"
                      name="radio"
                      value={Object.values(item)[0].bottleName}
                      checked={bottleName === Object.values(item)[0].bottleName}
                      onChange={(e) => {
                        onClickRadioButton(e, Object.keys(item)[0]);
                        close();
                      }}
                    />
                    <RadioButtonLabel />
                    <RadioText>{Object.values(item)[0].bottleName}</RadioText>
                  </Item>
                ))}
              </TagInputBox>
            </ModalPage>
          </ModalPopupContainer>
        )}
      </Popup>
    );
  } else {
    return <></>;
  }
}

export default WritePopup;

const ModalPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  height: 100%;
`;

const BtnContainer = styled.div`
  width: 100px;
  height: 45px;
  background-color: #a5aac7;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

const TitleBox = styled.div`
  width: 90%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const CancelBtn = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("images/main/XLogo.png");
  cursor: pointer;
`;

const ModalPage = styled.div`
  height: 100%;
  min-width: 320px;
  min-height: 300px;
  width: 80%;
  height: 100%;
  background-color: #454d96;
  border-radius: 10px;
  box-shadow: 0px 0px 37px 6px rgba(91, 91, 91, 0.81);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dotted white;
`;

const TagInputBox = styled.div`
  width: 280px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  margin-top: 2px;
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border-radius: 2px;
  color: white;
  font-weight: 500;
  width: 200px;
  justify-content: space-between;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 2px solid #ccc;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 100px;
  height: 25px;
  margin-right: 10px;
  &:checked + ${RadioButtonLabel} {
    background: #ec7b59;
    /* z-index: 999; */
  }
  &:hover + ${RadioButtonLabel} {
    background-color: #ec7b59;
  }
`;

const RadioText = styled.div`
  font-size: 17px;
  color: white;
  width: 200px;
  text-align: right;
`;
