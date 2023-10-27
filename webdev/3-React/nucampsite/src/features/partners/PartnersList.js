import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = selectAllPartners();

    return (
        <Col className='mt-4'>
            {partners.map((partner) => (
                <Partner partner={partner} />
            ))};
        </Col>
    );

};

export default PartnersList;