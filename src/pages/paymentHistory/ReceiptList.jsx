const ReceiptList = ({ receipts }) => {
    return (
        <div className="container">
            {receipts.length === 0 ? (
                'You currently have no receipts created'
            ) : (
                <table className="table" id="my-table">
                    <thead>
                        <tr>
                            <th scope="col"># Index</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map((receipt, index) => {
                            const date = new Date(receipt?.date);

                            return (
                                <tr key={index}>
                                    <td style={{ fontSize: '10px' }}>{receipt?.UserId}</td>
                                    <td>{receipt?.UserName}</td>
                                    <td>{`${receipt?.price} $`}</td>
                                    <td>{date.toLocaleDateString()}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ReceiptList;
