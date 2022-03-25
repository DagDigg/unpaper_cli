import { RPCRequest } from 'common/types';
import { Empty } from 'google/protobuf/empty_pb';

/**
 * Creates or returns existing user mixes
 *
 * @param r Empty
 * @returns User Mixes
 */
export async function getMixes(r: RPCRequest<undefined>) {
    const req = new Empty();

    const res = await r.client.getMixes(req, null);
    return res.toObject();
}
