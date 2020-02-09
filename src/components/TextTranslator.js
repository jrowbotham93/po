import React from 'react';
import "../i18n";
import { useTranslation } from 'react-i18next';


function Text({label}){
  const { t } = useTranslation();
  return (
  <> {t(label)}</>
  )
};

export default Text
