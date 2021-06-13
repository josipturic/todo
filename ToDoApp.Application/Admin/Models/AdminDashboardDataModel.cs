using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoApp.Application.Admin.Models
{
    public class AdminDashboardDataModel
    {
        public AdminDashboardDataModel(int numOfServiceProviders, int numOfServices, int serviceWithMostViewsId, string serviceWithMostViewsTtile, string serviceProviderWihtMostServicesId, string serviceProviderWihtMostServicesName, int numofServices, int numOfViews)
        {
            NumOfServiceProviders = numOfServiceProviders;
            NumOfServices = numOfServices;
            ServiceWithMostViewsId = serviceWithMostViewsId;
            ServiceWithMostViewsTtile = serviceWithMostViewsTtile;
            ServiceProviderWihtMostServicesId = serviceProviderWihtMostServicesId;
            ServiceProviderWihtMostServicesName = serviceProviderWihtMostServicesName;
            NumofServices = numofServices;
            NumOfViews = numOfViews;
        }

        public int NumOfServiceProviders { get; set; }
        public int NumOfServices { get; set; }
        public int ServiceWithMostViewsId { get; set; }
        public string ServiceWithMostViewsTtile { get; set; }
        public int NumOfViews { get; set; }
        public string ServiceProviderWihtMostServicesId { get; set; }
        public string ServiceProviderWihtMostServicesName { get; set; }
        public int NumofServices { get; set; }
    }
}

