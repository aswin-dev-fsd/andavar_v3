'use client';
import {useEffect} from 'react';
export default function LocaleDocument({locale}:{locale:string}){useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dataset.lang=locale;},[locale]);return null}
