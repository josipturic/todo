# Dockerfile

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o out

# Build
WORKDIR /src
COPY nuget.config ToDoApp.Web/
COPY ["ToDoApp.Web/ToDoApp.Web.csproj", "ToDoApp.Web/"]
COPY ["ToDoApp.Infrastructure/ToDoApp.Infrastructure.csproj", "ToDoApp.Infrastructure/"]
COPY ["ToDoApp.Domain/ToDoApp.Domain.csproj", "ToDoApp.Domain/"]

RUN dotnet restore --configfile ToDoApp.Web/nuget.config "ToDoApp.Web/ToDoApp.Web.csproj"
COPY . .
WORKDIR "/src/ToDoApp.Web"
RUN dotnet build "ToDoApp.Web.csproj" -c Release -o /app/build

# Publish
FROM build AS publish
RUN dotnet publish "ToDoApp.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "ToDoApp.Web.dll"]