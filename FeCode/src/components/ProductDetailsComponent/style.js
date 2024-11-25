import styled from "styled-components";
import { Col, Image, InputNumber } from "antd";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px !important;
  width: 64px !important;
`;

export const WrapperStyleColSmall = styled(Col)`
  display: flex;
  align-items: center;
  height: 64px !important;
  width: 64px !important;
`;
/* Thêm khoảng cách bên trái để tạo khoảng trống giữa hình và chữ */
export const WrapperStyleNameProduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-word;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WrappePriceProduct = styled.div`
  background: rgb(250, 250, 250);
  border-radius: 4px;
  `;

export const WrappePriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;
`;

export const WrapperAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.change-address {
    color: rgb(10, 104, 255);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;

export const WrapperQualityProduct = styled.div`
  display: flex;
  gap:4px;
  align-items: center;
  width:100px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 40px; 
    border-top: none;
    border-bottom: none;
    .ant-input-number-handler-wrap{
    display: none !important}
  }
`;


