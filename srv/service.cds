using {db} from '../db/schema';
service MyService {

    entity PODetails as projection on db.PODetails;
}