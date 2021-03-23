using System;
using System.Collections.Generic;
using System.Linq;

namespace Application.ServiceProviders.Helpers
{
    public class ServiceProviderHelper
    {
        public static List<int> ParseSubcategoryIds (string subcategoryIds)
        {
            if (subcategoryIds is null) return null;

            return Array.ConvertAll(subcategoryIds.Split(";"), s => int.Parse(s)).ToList();
        }
    }
}
