import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { randomUid } from "utils/common";
import { getDateStringType, getDate } from "utils/date";
import { useNavigate } from "react-router-dom";
import { onValue } from "firebase/database";
import { isObjectLiteralElement } from "typescript";

function BottleTitlePopup() {
  const auth = getAuth();
  const db = getDatabase();
  const userUid = auth.currentUser?.uid;
  const [bottleUid, setBottleUid] = useState(randomUid(28));
  const target = bottleUid;
  const memoRef = ref(db, `${userUid}/${target}`);

  const navigate = useNavigate();

  const [bottleName, setBottleName] = useState("");
  const [bottleShape, setBottleShape] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setBottleName(value);
  };

  const onChangeShape = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setBottleShape(value);
  };

  const createBottleName = () => {
    if (bottleName.length === 0 && bottleShape.length === 0) {
      alert("병 색을 선택하고 , 한글자 이상 이름을 입력해주세요");
      return;
    } else if (bottleName.length === 0) {
      alert("보틀이름을 한글자 이상 입력해주세요");
      return;
    } else if (bottleShape.length === 0) {
      alert("보틀 컬러를 선택해주세요");
      return;
    }
    try {
      set(ref(db, `${userUid}/${target}`), {
        bottleName: bottleName,
        bottleShape: bottleShape,
      });
      navigate(`/hbmain`);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  useEffect(() => {
    onValue(memoRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        try {
          for (const [key, value] of Object.entries(data)) {
            //@ts-ignore
            setMemoData(value.memo);
            //@ts-ignore
            setBottleName(value.bottleName);
          }
        } catch (error: any) {
          console.log(`error: ${error}`);
        }
      }
    });
  }, []);

  let dataArr: any[] = [];
  const setMemoData = (data: any) => {
    dataArr.push(data);
  };

  return (
    <Popup
      trigger={
        <CreateBottleBtn>
          {bottleName ? bottleName : "Click Me!"}
        </CreateBottleBtn>
      }
      modal
      nested
    >
      {(close: any) => (
        <ModalPopupContainer>
          <TitleBox>
            <CancelBtn onClick={close} />
            <h1>행복의 주제를 입력해주세요!</h1>
          </TitleBox>
          <ModalPage>
            <TagInputBox>
              <TagInput
                onChange={onChangeName}
                name="bottleName"
                value={bottleName}
                maxLength={15}
                type="text"
                placeholder="보틀의 이름을 정해주세요"
                required
              />
              <Item>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="white"
                  checked={bottleShape === "white"}
                  onChange={onChangeShape}
                />
                <RadioButtonLabel />
                <div>흰색 병</div>
              </Item>
              <Item>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="blue"
                  checked={bottleShape === "blue"}
                  onChange={onChangeShape}
                />
                <RadioButtonLabel />
                <div>파란 병</div>
              </Item>
              <Item>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="green"
                  checked={bottleShape === "green"}
                  onChange={onChangeShape}
                />
                <RadioButtonLabel />
                <div>초록 병</div>
              </Item>
              <Item>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="black"
                  checked={bottleShape === "black"}
                  onChange={onChangeShape}
                />
                <RadioButtonLabel />
                <div>검은 병</div>
              </Item>
              <SubjectSubmitBtn onClick={createBottleName}>
                보틀만들기
              </SubjectSubmitBtn>
            </TagInputBox>
          </ModalPage>
        </ModalPopupContainer>
      )}
    </Popup>
  );
}

export default BottleTitlePopup;

const ModalPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const ModalPage = styled.div`
  height: 100%;
  min-width: 320px;
  min-height: 300px;
  width: 80%;
  height: 100%;
  background-color: #143f6b;
  border-radius: 10px;
  box-shadow: 0px 0px 37px 6px rgba(91, 91, 91, 0.81);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dotted white;
`;

const CreateBottleBtn = styled.div`
  cursor: pointer;
  width: 72px;
  height: 120px;
  word-break: break-word;
  z-index: -10;
`;

const TitleBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f6f54d;
  border-radius: 10px;
  border: 5px dotted white;
  padding: 10px;
  & > h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;

const CancelBtn = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("/images/main/XLogo.png");
  cursor: pointer;
`;

const TagInputBox = styled.div`
  width: 280px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TagInput = styled.input`
  color: white;
  width: 200px;
  font-size: 20px;
  border: none;
  text-align: center;
  line-height: 2;
  background-color: transparent;
  border-bottom: 1px solid white;
  ::placeholder {
    color: #ffffff2d;
  }
  margin-bottom: 10px;
`;

const SubjectSubmitBtn = styled.button`
  font-size: 17px;
  padding: 5px;
  margin-top: 30px;
  margin-left: 100px;
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f55353;
  border: none;
  border-radius: 3px;
  color: black;
  cursor: pointer;
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
  width: 78%;
  justify-content: space-around;
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
    background: #feb139;
  }
  &:hover + ${RadioButtonLabel} {
    background-color: #feb139;
  }
`;
