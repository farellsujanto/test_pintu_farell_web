import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../../utils/apiRequestUtil';
import { PRICE_CHANGES_KEY, SUPPORTED_CURRENCIES_KEY } from './marketQueryKeys';
import { PRICE_CHANGES_URL, SUPPORTED_CURRENCIES_URL } from './marketQueryUrls';
import PriceChanges from '../../models/priceChangesModel';
import SupportedCurrencies from '../../models/supportedCurrenciesModel';

export const usePriceChangesQuery = () =>
    useQuery<PriceChanges[]>([PRICE_CHANGES_KEY], () =>
        fetchApi<any>(
            PRICE_CHANGES_URL,
            undefined,
            'GET',
        ),
    );

export const useSupportedCurrenciesQuery = () =>
    useQuery<SupportedCurrencies[]>([SUPPORTED_CURRENCIES_KEY], () =>
        fetchApi<any>(
            SUPPORTED_CURRENCIES_URL,
            undefined,
            'GET',
        ),
    );
