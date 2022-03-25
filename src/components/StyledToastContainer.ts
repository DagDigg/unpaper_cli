import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { isMobile } from 'react-device-detect';

const StyledToastContainer = styled(ToastContainer).attrs({
    position: isMobile ? 'top-center' : 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    draggablePercent: 50,
})`
    @media only screen and (max-width: 480px) {
        .Toastify__toast {
            margin: 18px;
        }
    }
    .Toastify__toast-container {
    }
    .Toastify__toast {
        background-color: ${({ theme }) => theme['smContrast'] + '80'};
        border: 1px solid ${({ theme }) => theme['grayed']};
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(18px);
        color: ${({ theme }) => theme['mdContrast+1']};
        box-shadow: 0px 0px 6px 0px ${({ theme }) => theme['smContrast-1'] + '40'};
        border-radius: 18px;
        padding: 16px;
        ${isMobile &&
        css`
            margin: max(env(safe-area-inset-top), 8px) 16px 4px;
        `}
    }
    .Toastify__toast--notification {
        padding: 6px;
    }
    .Toastify__toast--notification .Toastify__close-button {
        margin: 3px;
    }
    .Toastify__toast--error {
    }
    .Toastify__toast--warning {
    }
    .Toastify__toast--success {
    }
    .Toastify__toast-body {
    }
    .Toastify__progress-bar {
    }
    .Toastify__close-button {
        color: ${({ theme }) => theme['mdContrast']};
    }
`;

export default StyledToastContainer;
