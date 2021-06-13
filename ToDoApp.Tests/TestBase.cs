﻿using NUnit.Framework;
using System.Threading.Tasks;

namespace ToDoApp.Tests
{
    using static Testing;
    public class TestBase
    {
        [SetUp]
        public async Task SetUp()
        {
            await ResetState();
        }
    }
}
