import React from "react";
import * as S from "./account-settings.styled";

const AccountSettings = () => {
  return (
    <S.SettingsForm>
      <S.FormTitle>Account Settings</S.FormTitle>
      <S.Form>
        <S.InputWrapper>
          <S.Label>First name</S.Label>
          <S.Input type="text" placeholder="John" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Last name</S.Label>
          <S.Input type="text" placeholder="Doe" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Email</S.Label>
          <S.Input type="email" placeholder="Email" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Phone number</S.Label>
          <S.Input type="text" placeholder="+374 55 55 55 55" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>City</S.Label>
          <S.Input type="text" placeholder="Yerevan" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Postcode</S.Label>
          <S.Input type="text" placeholder="04851" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Street Address</S.Label>
          <S.Input type="text" placeholder="Street Address" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>House/Flat Number</S.Label>
          <S.Input type="text" placeholder="48/2" />
        </S.InputWrapper>
        <S.ButtonsWrapper>
          <S.CancelButton>Cancel</S.CancelButton>
          <S.SaveButton>Save Changes</S.SaveButton>
        </S.ButtonsWrapper>
      </S.Form>
    </S.SettingsForm>
  );
};

export default AccountSettings;
