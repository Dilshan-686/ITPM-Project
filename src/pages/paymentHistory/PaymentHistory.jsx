import * as Styles from './styles';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import ReceiptList from './ReceiptList';
import { useEffect, useState } from 'react';
import { Icon, Spinner } from '../../components';
import { getPaymentHistory } from '../../services';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import { authService } from '../../shared';

const PaymentHistory = () => {
    useAuthGuard();
    const [userHistory, setUserHistory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const doc = new jsPDF();

    useEffect(() => {
        if (authService.authGuard()) {
            setIsLoading(true);
            getPaymentHistory()
                .then((data) => {
                    setUserHistory(data);
                    setIsLoading(false);
                })
                .catch((error) => console.error(error));
        }
    }, []);

    if (!authService.authGuard()) {
        return null;
    }
    return (
        <Styles.PaymentHistoryPageContainer>
            <Styles.TitleContainer>
                <h2>{`Payment History`}</h2>
                <Icon
                    name="download"
                    size="32px"
                    onClick={() => {
                        // dnt move out autoTable function wait until dom ready
                        autoTable(doc, { html: '#my-table' });
                        doc.save('test');
                    }}
                />
            </Styles.TitleContainer>
            {isLoading ? (
                <Spinner />
            ) : (
                <>{userHistory?.length > 0 ? <ReceiptList receipts={userHistory} /> : <>No Data Found</>}</>
            )}
        </Styles.PaymentHistoryPageContainer>
    );
};

export default PaymentHistory;
