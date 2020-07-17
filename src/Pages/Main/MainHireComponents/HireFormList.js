import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faDotCircle,
} from '@fortawesome/fontawesome-free-solid';
import styled from 'styled-components';

const HireFormList = ({ hireQnA, nowQnA }) => {
  const changeInputType = (title) => {
    return title === '체크박스'
      ? 'checkbox'
      : title === '라디오버튼'
      ? 'radio'
      : 'text';
  };

  const changeInputFontAwesome = (title) => {
    return title === '체크박스'
      ? faCheckSquare
      : title === '라디오버튼'
      ? faDotCircle
      : '';
  };

  return (
    <UlHireFormList
      displayActive={hireQnA && hireQnA[nowQnA].answers.is_direct_input}
    >
      {hireQnA &&
        hireQnA[nowQnA].answers.map((answerData) => {
          return (
            <li className='form-answer' key={answerData && answerData.id}>
              <div className='form-answer-type'>
                <label
                  value={answerData && answerData.value}
                  htmlFor={answerData && answerData.id}
                >
                  <input
                    type={changeInputType(
                      hireQnA && hireQnA[nowQnA].type.title
                    )}
                    value={answerData && answerData.value}
                    id={answerData && answerData.id}
                    name={answerData && answerData.item_id}
                  />
                  <span
                    className={`${changeInputType(
                      hireQnA && hireQnA[nowQnA].type.title
                    )}-icon`}
                  >
                    <FontAwesomeIcon
                      icon={changeInputFontAwesome(
                        hireQnA && hireQnA[nowQnA].type.title
                      )}
                    />
                  </span>
                  <span className='answer'>
                    {answerData && answerData.value}
                  </span>
                </label>
              </div>
              <LiInput displayActive={answerData && answerData.is_direct_input}>
                <input
                  type='text'
                  placeholder={answerData && answerData.placeholder}
                />
              </LiInput>
            </li>
          );
        })}
    </UlHireFormList>
  );
};

export default HireFormList;

const UlHireFormList = styled.ul`
  border: 1px solid #e7e7e7;
  border-radius: 4px;

  .form-answer {
    padding: 15px 25px;
    border-bottom: 1px solid #e7e7e7;

    &:last-child {
      border-bottom: 0;
    }

    &-type {
      label {
        display: inline-block;
        line-height: 23px;
        width: 100%;
        cursor: pointer;

        /* 체크박스 */
        input[type='checkbox'] {
          display: none;
        }

        input[type='checkbox'] + .checkbox-icon {
          vertical-align: top;
          margin-right: 20px;
          font-size: 23px;
          color: #e7e7e7;
        }

        input[type='checkbox']:checked + .checkbox-icon {
          color: var(--primary);
        }

        /* 라디오 */
        input[type='radio'] {
          display: none;
        }

        input[type='radio'] + .radio-icon {
          vertical-align: top;
          margin-right: 20px;
          font-size: 23px;
          color: #e7e7e7;
        }

        input[type='radio']:checked + .radio-icon {
          color: var(--primary);
        }
      }
    }
  }
`;

const LiInput = styled.div`
  display: ${(props) => (props.displayActive === true ? '' : 'none')};
  padding: 10px 37px 0;

  input[type='text'] {
    height: 48px;
    width: 100%;
    padding: 11px 16px;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    cursor: text;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--gray);
    }
  }
`;
